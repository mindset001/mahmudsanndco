import Image from 'next/image'
import React from 'react'
import Why from '../../../../public/images/chair.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[60%] md:w-[70%]'>
            <h1 className='text-[30px] md:text-[44px] font-[600]'>Why M.A. Mahmud SAN & Co</h1>
            </div>
            
        </div>
        <Image src={Why} alt='' className='w-full' height={200} width={500}/>
    </main>
  )
}

export default Hero