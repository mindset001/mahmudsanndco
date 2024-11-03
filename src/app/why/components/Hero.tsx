import Image from 'next/image'
import React from 'react'
import About from '../../../../public/images/about2.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[60%] md:w-[70%]'>
            <h1 className='text-[30px] md:text-[44px] font-[600]'>M.A. Mahmud SAN & Co</h1>
            </div>
            
        </div>
        <Image src={About} alt=''/>
    </main>
  )
}

export default Hero