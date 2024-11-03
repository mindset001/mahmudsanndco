import Image from 'next/image'
import React from 'react'
import About from '../../../../public/images/about.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[65%]md:w-[70%]'>
            <h1 className='text-[35px] md:text-[44px] font-[600]'>Our Practice Areas</h1>
            </div>
            
        </div>
     
    </main>
  )
}

export default Hero