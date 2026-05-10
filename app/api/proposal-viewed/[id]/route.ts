import { NextRequest, NextResponse } from 'next/server'

const KV_URL = process.env.KV_REST_API_URL!
const KV_TOKEN = process.env.KV_REST_API_TOKEN!

// Next.js 14: params is NOT a Promise. Upstash-compatible POST command format.
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const key = `proposal:${id}`

    // GET existing proposal
    const getRes = await fetch(KV_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['GET', key]),
    })
    const getJson = await getRes.json()
    if (!getJson.result) {
      return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    }

    const proposal = typeof getJson.result === 'string'
      ? JSON.parse(getJson.result)
      : getJson.result

    proposal.viewed = true

    // SET updated proposal
    await fetch(KV_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['SET', key, JSON.stringify(proposal)]),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('proposal-viewed error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
