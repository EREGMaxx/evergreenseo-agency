import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const INSTANTLY_KEY = process.env.INSTANTLY_API_KEY!
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY!
const WEBHOOK_SECRET = process.env.INSTANTLY_WEBHOOK_SECRET!
const KV_URL = process.env.KV_REST_API_URL!
const KV_TOKEN = process.env.KV_REST_API_TOKEN!

// Classify prospect reply intent
function classifyIntent(body: string): 'interested' | 'pricing' | 'skeptical' | 'not_interested' | 'wrong_person' | 'ooo' | 'unknown' {
  const text = body.toLowerCase()
  if (/unsubscribe|remove|stop|opt.?out|not interested|no thanks|don't contact|do not contact/i.test(text)) return 'not_interested'
  if (/out of office|ooo|on vacation|away|back on|return/i.test(text)) return 'ooo'
  if (/wrong|not the owner|not the right|not responsible|someone else|forward/i.test(text)) return 'wrong_person'
  if (/how much|what.?s the cost|pricing|price|rates|cost|fee|charge|investment/i.test(text)) return 'pricing'
  if (/tried|already have|current(ly)?|working with|agency|doesn.?t work|waste/i.test(text)) return 'skeptical'
  if (/yes|sure|interested|tell me|sounds good|let.?s|happy to|when|available|call|chat|connect|learn more|more info/i.test(text)) return 'interested'
  return 'unknown'
}

async function generateReply(
  prospectReply: string,
  leadInfo: { firstName?: string; businessName?: string; city?: string; niche?: string; eaccount: string },
  intent: string
): Promise<string> {
  const client = new Anthropic({ apiKey: ANTHROPIC_KEY })

  const senderName = leadInfo.eaccount.split('@')[0]
  const senderNameFormatted = senderName.charAt(0).toUpperCase() + senderName.slice(1)

  const systemPrompt = `You are ${senderNameFormatted} from Evergreen SEO Agency, following up on a cold email about SEO for a ${leadInfo.niche || 'home service'} contractor in ${leadInfo.city || 'their city'}.

Your goal: book a 10-minute call to show them what it would take to reach Google's local top 3.

Rules:
- 2-4 sentences max. Cold email replies must be SHORT.
- No bullet points. Plain conversational text only.
- No emojis.
- Sound like a real person, not a bot. Natural, direct.
- Sign off as: ${senderNameFormatted} | Evergreen SEO Agency
- Never mention AI, automation, or templates.
- Move toward booking a call without being pushy.`

  const intentGuide: Record<string, string> = {
    interested: 'They are interested. Confirm excitement, offer 2 specific time slots this week for a quick call. Keep it very short.',
    pricing: 'They asked about pricing. Say you tailor pricing to each market and want to show them the opportunity first — offer a quick 10-min call to walk through exactly what it would cost for their area.',
    skeptical: 'They are skeptical or have tried SEO before. Acknowledge it briefly, differentiate (you focus only on local map pack, results in 90 days or you work for free), then ask one question to re-engage.',
    not_interested: 'They said no. Be gracious, keep the door open. One sentence max: "No worries — if anything changes, you know where to find me."',
    wrong_person: 'They are not the right contact. Apologize briefly, ask who handles marketing or if they can point you to the right person.',
    ooo: 'They are out of office. Short reply saying you will reach back out when they return.',
    unknown: 'Unclear intent. Ask a single clarifying question to understand where they are at, then offer a quick call.',
  }

  const message = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 300,
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: `Their reply: "${prospectReply}"\n\nIntent classification: ${intent}\nGuidance: ${intentGuide[intent] || intentGuide.unknown}\n\nWrite a reply. Plain text only, no subject line, no markdown.`
      }
    ]
  })

  return (message.content[0] as { text: string }).text.trim()
}

async function sendInstantlyReply(replyToUuid: string, eaccount: string, subject: string, bodyText: string) {
  const res = await fetch('https://api.instantly.ai/api/v2/emails/reply', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${INSTANTLY_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      reply_to_uuid: replyToUuid,
      eaccount,
      subject: subject.startsWith('Re:') ? subject : `Re: ${subject}`,
      body: { text: bodyText },
    }),
  })
  return res.json()
}

async function notifyViaKV(event: {
  leadEmail: string
  businessName?: string
  city?: string
  niche?: string
  theirMessage: string
  ourReply: string
  intent: string
  eaccount: string
  timestamp: string
}) {
  if (!KV_URL || !KV_TOKEN) return

  const key = `reply:${Date.now()}`
  await fetch(`${KV_URL}/set/${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...event, notified: false }),
  })
  // Set 7-day TTL
  await fetch(`${KV_URL}/expire/${encodeURIComponent(key)}/604800`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
  })
}

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret
    const secret = req.headers.get('x-webhook-secret') || req.nextUrl.searchParams.get('secret')
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await req.json()

    // Instantly webhook payload structure
    const eventType = payload.event_type || payload.type
    if (eventType !== 'reply_received') {
      return NextResponse.json({ ok: true, skipped: true })
    }

    // Extract email data — Instantly sends either top-level or nested under 'data'
    const data = payload.data || payload
    const email = data.email || data
    const lead = data.lead || {}

    const emailId: string = email.id || data.email_id
    const eaccount: string = email.eaccount || data.eaccount
    const subject: string = email.subject || data.subject || 'Re: Your inquiry'
    const replyBody: string = email.body?.text || email.body?.html?.replace(/<[^>]+>/g, '') || data.body || ''
    const leadEmail: string = email.from_address_email || lead.email || data.lead_email || ''
    const firstName: string = lead.first_name || lead.firstName || ''
    const businessName: string = lead.company_name || lead.companyName || lead.custom_variables?.business_name || ''
    const city: string = lead.custom_variables?.city || ''
    const niche: string = lead.custom_variables?.niche || ''

    if (!emailId || !eaccount) {
      return NextResponse.json({ error: 'Missing required fields', payload }, { status: 400 })
    }

    // Classify and generate reply
    const intent = classifyIntent(replyBody)
    const ourReply = await generateReply(replyBody, { firstName, businessName, city, niche, eaccount }, intent)

    // Send reply via Instantly (same thread, same from address)
    const sendResult = await sendInstantlyReply(emailId, eaccount, subject, ourReply)

    // Log to KV for Skyler notification pickup
    await notifyViaKV({
      leadEmail,
      businessName,
      city,
      niche,
      theirMessage: replyBody.slice(0, 500),
      ourReply,
      intent,
      eaccount,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, intent, replyPreview: ourReply.slice(0, 100), sendResult })

  } catch (err) {
    console.error('instantly-reply error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
