import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from 'UI/molecules/Header/Header'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dragon Ball</title>
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default App
