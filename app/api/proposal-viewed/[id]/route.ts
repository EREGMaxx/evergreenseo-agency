import { NextRequest, NextResponse } from 'next/server'

const KV_URL = process.env.KV_REST_API_URL!
const KV_TOKEN = process.env.KV_REST_API_TOKEN!

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const key = `proposal:${id}`

    // Fetch existing proposal
    const getRes = await fetch(`${KV_URL}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    })
    const getJson = await getRes.json()
    if (!getJson.result) {
      return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    }

    const proposal = typeof getJson.result === 'string'
      ? JSON.parse(getJson.result)
      : getJson.result

    // Update viewed flag
    proposal.viewed = true

    await fetch(`${KV_URL}/set/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proposal),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('proposal-viewed error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
