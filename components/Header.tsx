export default function Header() {
  return (
    <header className='relative w-full p-2 z-20 bg-zinc-50 dark:bg-zinc-900'>
      <div className='mx-auto max-w-7xl'>
        <nav className='flex items-center gap-3 text-base'>
          <a href='/' className='group'>
            <h2 className='font-bold p-2 text-xl text-zinc-900 dark:text-white'>
              <img src='/images/global/logo.svg' alt='Logo' className='w-5 inline-block group-hover:rotate-[30deg] transition duration-200 mr-2 mb-1' />
              DabThemes
            </h2>
          </a>
          <div className='items-center gap-6 hidden md:flex'>
            <a href='/about' className='text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100 transition duration-200'>
              About
            </a>
            <a href='https://dabaz.vercel.app/contact' className='text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100 transition duration-200'>
              Contact
            </a>
          </div>
          <div className='flex-1'></div>
        </nav>
      </div>
    </header>
  )
}