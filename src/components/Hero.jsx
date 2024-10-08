import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[700px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>

        <p className='uppercase font-medium'>It's time to get</p>

        <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>SWOLE<span className='text-blue-400'>NORMOUS</span></h1>

      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>

      <Button func={()=>
        window.location.href = '#generate'
      } text={'Accept & Begin'}></Button>
    </div>
  )
}
