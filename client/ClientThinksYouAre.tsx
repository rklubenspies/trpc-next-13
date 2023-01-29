'use client'

import { trpc } from './trpcClient'

export function ClientThinksYouAre() {
  const { data, isLoading } = trpc.whoami.useQuery()

  return (
    <>
      <h1>Client thinks you are:</h1>
      <details open>
        <summary>Raw data</summary>
        {isLoading ? 'Loading...' : <pre>{JSON.stringify(data, null, 4)}</pre>}
      </details>
    </>
  )
}
