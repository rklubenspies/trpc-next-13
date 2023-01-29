import { HydrateClient } from '~/client/HydrateClient'
import { ClientThinksYouAre } from '~/client/ClientThinksYouAre'
import { rsc } from '~/server-rsc/trpc'

export default async function Page() {
  const whoami = await rsc.whoami.fetch()

  return (
    <HydrateClient state={await rsc.dehydrate()}>
      <div className='p-4'>
        <article className='prose overflow-hidden rounded-md bg-white p-4 shadow-md'>
          <p>
            This page used HydrateClient to hydrate the RSC reponse into the
            client-side reponse
          </p>
        </article>
      </div>

      <div className='p-4'>
        <article className='prose overflow-hidden rounded-md bg-white p-4 shadow-md'>
          <h1>RSC thinks you are:</h1>
          <details open>
            <summary>Raw data</summary>
            <pre>{JSON.stringify(whoami, null, 4)}</pre>
          </details>
        </article>
      </div>
      <div className='p-4'>
        <article className='prose overflow-hidden rounded-md bg-white p-4 shadow-md'>
          <ClientThinksYouAre />
        </article>
      </div>
    </HydrateClient>
  )
}
