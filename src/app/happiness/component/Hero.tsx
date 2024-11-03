import Image from 'next/image'
import React from 'react'
import About from '../../../../public/images/about.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[70%]'>
            <h1 className='text-[30px] md:text-[44px] font-[600]'>NNAJI SOROCHUKWU</h1>
            </div>
            
        </div>
     
    </main>
  )
}

export default Hero