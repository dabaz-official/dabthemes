const today = new Date()

export default function Footer() {
  return (
    <footer className='text-zinc-500 p-2 text-center'>
      &copy; {today.getFullYear()}
      <a href='https://dabaz.vercel.app'>DabAZ</a>. All rights reserved.
    </footer>
  )
}