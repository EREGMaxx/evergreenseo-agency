import { Metadata } from 'next'


const KV_URL = process.env.KV_REST_API_URL!
const KV_TOKEN = process.env.KV_REST_API_TOKEN!

interface ProposalData {
  html: string
  business: string
  createdAt: string
  viewed: boolean
}

async function getProposal(id: string): Promise<ProposalData | null> {
  if (!KV_URL || !KV_TOKEN) return null
  try {
    const res = await fetch(KV_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(['GET', `proposal:${id}`]),
      cache: 'no-store',
    })
    const json = await res.json()
    if (!json.result) return null
    return typeof json.result === 'string' ? JSON.parse(json.result) : json.result
  } catch {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Your SEO Proposal — Evergreen SEO Agency',
    robots: { index: false, follow: false },
  }
}

export default async function ProposalPage({ params }: { params: { id: string } }) {
  const { id } = params
  const proposal = await getProposal(id)

  if (!proposal) {
    return (
      <div style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        background: '#f9fafb',
        color: '#374151',
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            This proposal is no longer available.
          </h1>
          <p style={{ color: '#6b7280' }}>
            Please contact us if you believe this is an error.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){fetch('/api/proposal-viewed/${id}',{method:'POST'}).catch(function(){});})();`,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: proposal.html }} />
    </>
  )
}
