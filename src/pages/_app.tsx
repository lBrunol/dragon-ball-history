import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dragon Ball</title>
        <meta name="description" content="" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
