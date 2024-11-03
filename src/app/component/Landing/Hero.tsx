import Image from 'next/image'
import React from 'react'
import Right from '../../../../public/images/right.png'
import Left from '../../../../public/images/left.png'
// import { Reggae_One } from 'next/font/google'
import localFont from 'next/font/local'
// const myFont = localFont({ src: './Resgak-Black.woff' })

function Hero() {
  return (
  <main className='w-full hero mt-[-60px] text-[#fff]'>
    <div className='flex justify-start md:justify-end items-end h-[80%] px-10'>
      <div>
      <div>
       <h1 className='text-[44px]'>  Finest Legal Advisory.</h1>
       </div>
        <div className='flex justify-start md:justify-end mt-4'>
            <Image src={Left} alt='' className='w-[48px] h-[48px]'/>
            <Image src={Right} alt='' className='w-[48px] h-[48px] ml-[-10px]'/>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Hero