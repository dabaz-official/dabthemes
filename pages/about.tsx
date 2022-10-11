import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Masthead from '../components/Masthead'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DabThemes</title>
        <link rel="icon" href="/images/global/logo.svg" />
      </Head>

      <Header />

      <main>
        <Masthead />
        <section className='px-8 mx-auto max-w-7xl'>
          <p className='mb-8 indent-4'>
            This website only provides some of the themes of several IDE and shells.
          </p>
        </section>
      </main>
    </div>
  )
}

export default About
