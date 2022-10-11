import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Masthead from '../components/Masthead'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DabThemes</title>
        <link rel="icon" href="/images/global/logo.svg" />
      </Head>

      <Header />

      <main>
        <Masthead />
      </main>

      <Footer />
    </div>
  )
}

export default Home
