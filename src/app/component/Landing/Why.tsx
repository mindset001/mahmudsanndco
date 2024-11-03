import Image from 'next/image'
import React from 'react'
import Why1 from '../../../../public/images/why.png'
import Link from 'next/link'
function Why() {
  return (
   <main>
    <div className='w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/2 bg-[#FFF1C6] md:h-[100vh] px-10 md:px-40 py-10 md:py-40'>
            <h1 className='text-[16px] md:text-[35px] font-[500]'>Why M.A Mahmud SAN & Co.</h1>
            <p className='text-[10px] md:text-[16px] font-[400] mt-5 md:mt-10 md:w-[418px]'>Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.</p>
            
           <Link href='/why'>
           <button className='border border-[#000000] rounded-[36px] px-4 py-2 md:px-8 md:py-4 font-[700] text-[8px] md:text-[16px] mt-5 md:mt-10'>Read More</button>
           </Link>
        </div>
        <div className='md:w-1/2 h-[100vh]'>
            <Image src={Why1} alt='' className='h-[100vh]'/>
        </div>
    </div>
   </main>
  )
}

export default Why