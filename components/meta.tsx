import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>

<script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"></script>
      <link
        rel="apple-touch-icon"
        sizes="1440x1440"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        href="/favicon/favicon.svg"
      />
      <link
        rel="mask-icon"
        href="/favicon/favicon.svg"
        color="#ed1c24"
      />
      <link rel="shortcut icon" href="/favicon/favicon.svg" />
      <meta name="msapplication-TileColor" content="#ed1c24" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Web for the masses.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
