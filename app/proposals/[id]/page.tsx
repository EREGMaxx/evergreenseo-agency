import { Metadata } from 'next'

const KV_URL = process.env.KV_REST_API_URL!
const KV_TOKEN = process.env.KV_REST_API_TOKEN!

interface ProposalData {
  html: string
  business: string
  createdAt: string
  viewed: boolean
}

// Upstash-compatible POST command format
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

// Next.js 14: params is NOT a Promise
export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  }
}

export default async function ProposalPage({ params }: { params: { id: string } }) {
  const { id } = params
  const proposal = await getProposal(id)

  if (!proposal) {
    return (
      <html>
        <head>
          <meta name="robots" content="noindex" />
          <title>Proposal Unavailable</title>
          <style>{`
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              display: flex; align-items: center; justify-content: center;
              min-height: 100vh; margin: 0; background: #f9fafb; color: #374151;
            }
            .msg { text-align: center; padding: 2rem; }
            h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
            p { color: #6b7280; }
          `}</style>
        </head>
        <body>
          <div className="msg">
            <h1>This proposal is no longer available.</h1>
            <p>Please contact us if you believe this is an error.</p>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html>
      <head>
        <meta name="robots" content="noindex" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{proposal.business ? `Proposal for ${proposal.business}` : 'Your SEO Proposal'}</title>
        <style>{`* { box-sizing: border-box; } body { margin: 0; padding: 0; }`}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){fetch('/api/proposal-viewed/${id}',{method:'POST'}).catch(function(){});})();`,
          }}
        />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: proposal.html }} />
      </body>
    </html>
  )
}
