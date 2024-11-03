import React from 'react'
import Right from '../../../../public/images/right2.png'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <main className='hero-about flex justify-center items-center'> 
       <div className='w-[80%] flex flex-col md:flex-row justify-between '>
        <div className='md:w-1/2 font-[500] text-[35px] text-center md:text-left'><h1>About the Firm.</h1></div>
        <div className='md:w-1/2 flex flex-col gap-4 text-[10px] md:text-[16px] font-[400] text-center md:text-left'>
            <p>M.A. Mahmud SAN & Co is a leading cross border
                 law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions. </p>
                 <p>
                 Our team of professionals are characterised by their 
                 scholastic background from reputable Universities and 
                 possess excellent reputation for quality service delivery and strict adherence ethical standards.</p>

               <Link href='/about'>
               <button className='flex justify-center md:justify-normal items-center gap-2 font-[700] mt-6'>
                    <p>Read More</p>
                    <Image src={Right} alt='' className='w-[18px] h-[18px]'/>
                 </button>
               </Link>
        </div>
       </div>
    </main>
  )
}

export default About