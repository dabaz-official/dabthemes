import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Masthead from '../components/Masthead'

export default function error() {
  return (
    <div>
      <Head>
        <title>DabThemes</title>
        <link rel="icon" href="/images/global/logo.svg" />
      </Head>

      <Header />

      <main>
        <Masthead />
        <section className='px-8 mx-auto max-w-7xl my-12'>
          <h1 className='text-3xl text-center font-semibold mt-12 mb-8'>
            Oops, not found
          </h1>
          <p className='mb-2 text-center'>
            The page you are looking for may be removed...
          </p>
          <div className='text-center py-4'>
            <a
              className='inline-flex items-center gap-1 underline underline-offset-2 decoration-blue-500 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition duration'
              href='/'
            >
              Go to Index
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}