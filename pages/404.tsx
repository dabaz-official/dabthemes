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
          <h1 className='text-2xl font-semibold text-blue-600 dark:text-blue-400'>
            Introduction
          </h1>
          <p className='mb-2'>
            This website only provides some of the themes of several IDE and shells. These themes are my favorite ones and I want to share them with y&apos;all. And that is the reason why I build DabThemes.
          </p>
          <h1 className='text-2xl font-semibold text-blue-600 dark:text-blue-400'>
            Contact
          </h1>
          <p className='mb-2'>
            Here are some of my contacts:
          </p>
          <ul className='mb-2 list-disc'>
            <li>
              Twitter:{' '}
              <a
                href='https://twitter.com/dabaz_official'
                className='underline underline-offset-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400 dark:hover:decoration-blue-400 transition duration-200'
              >
                @dabaz_official
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a
                href='https://instagram.com/dabaz_official'
                className='underline underline-offset-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400 dark:hover:decoration-blue-400 transition duration-200'
              >
                @dabaz_official
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                href='https://github.com/dabaz-official'
                className='underline underline-offset-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400 dark:hover:decoration-blue-400 transition duration-200'
              >
                @dabaz-official
              </a>
            </li>
            <li>
              Email:{' '}
              <a
                href='mailto:dabaz@dabazofficial.com'
                className='underline underline-offset-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400 dark:hover:decoration-blue-400 transition duration-200'
              >
                dabaz@dabazofficial.com
              </a>
            </li>
          </ul>
          <p className='mb-2'>
            If you want to send a direct message, just go to my{' '}
            <a
              href='https://dabaz.vercel.app/contact'
              className='underline underline-offset-2 decoration-blue-500 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400 dark:hover:decoration-blue-400 transition duration-200'
            >
              contact page
            </a>
            , fill in the contact form and click the &quot;Submit&quot; button. I will reply ASAP.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}