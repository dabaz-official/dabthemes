export default function Masthead() {
  return (
    <section className='relative mb-6 h-80 flex justify-center items-center'>
      <div className='absolute w-full h-full overflow-hidden'>
        <video
          className='absolute inset-0 min-w-full min-h-full object-cover opacity-80'
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src='/videos/masthead.webm'
            type='video/webm; codecs=vp9'
          />
          <source
            src='/videos/masthead.mp4'
            type='video/mp4; codecs=hvc1'
          />
        </video>
      </div>
      <div className='z-10 text-center px-8 drop-shadow-lg shadow-black'>
        <div className='text-4xl font-bold'>
          DabThemes
        </div>
      </div>
    </section>
  )
}