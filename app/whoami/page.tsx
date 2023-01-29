import Link from 'next/link'
import { ClientThinksYouAre } from '~/client/ClientThinksYouAre'
import { rsc } from '~/server-rsc/trpc'

export default async function Page() {
  const whoami = await rsc.whoami.fetch()

  return (
    <>
      <div className='p-4'>
        <article className='prose overflow-hidden rounded-md bg-white p-4 shadow-md'>
          <Link href='/whoami/hydrate'>
            <button className='button'>
              Use HydrateClient to sync server response to client side
            </button>
          </Link>
          <p>
            The RSC ctx.user contains an id attribute. When HydrateClient is not
            used, the results from the RSC response do not make it to the client
            response (and the client response is re-fetched on the client side).
            If we use HydrateClient, the repsonse from RSC will be hydrated into
            the page and the client-side call will not run until invalidated.
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
    </>
  )
}
