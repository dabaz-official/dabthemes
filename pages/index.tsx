import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Masthead from '../components/Masthead'

const themes = [
  {
    id: 1,
    name: 'One Dark Pro',
    href: 'https://vscodethemes.com/e/zhuangtongfa.material-theme/one-dark-pro?language=javascript',
    imageSrc: 'https://vscodethemes.com/e/zhuangtongfa.material-theme/one-dark-pro.svg?language=javascript',
    imageAlt: "One Dark Pro",
    author: 'binaryify',
  },
  {
    id: 2,
    name: 'GitHub Theme',
    href: 'https://vscodethemes.com/e/github.github-vscode-theme/github-dark?language=javascript',
    imageSrc: 'https://vscodethemes.com/e/github.github-vscode-theme/github-dark.svg?language=javascript',
    imageAlt: "GitHub Theme",
    author: 'GitHub',
  },
]

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
        <div className='px-8 mx-auto my-12'>
          <section>
            <ul className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8'>
              {themes.map(theme => (
                <li className='text-center mb-4' key={theme.id}>
                  <a href={theme.href}>
                    <img
                      className='rounded-xl active:ring active:ring-offset-2 active:ring-blue-600 dark:active:ring-blue-400'
                      src={theme.imageSrc}
                      alt={theme.imageAlt}
                    />
                    <div className='mt-3 text-xl font-bold'>
                      {theme.name}
                    </div>
                    <div className='text-md'>
                      by {theme.author}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
