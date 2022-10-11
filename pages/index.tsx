import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DabThemes</title>
        <link rel="icon" href="/images/global/logo.svg" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
