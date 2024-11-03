import Image from 'next/image'
import React from 'react'
import { articles } from './data'
import Gig from '../../../../public/images/career.png'
import Link from 'next/link'
import { Divider } from 'antd'

function Body() {
  return (
    <main className='mt-20 flex flex-col justify-center items-center'>

   
            <div className='w-[90%] md:w-[80%] flex flex-col-reverse md:flex-row justify-between'>
            <div className='md:w-[40%] text-justify mt-10 md:mt-0'>
                <p className='text-[16px] font-[400]'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions. </p>
                <p  className='text-[16px] font-[400] my-6'>Our team of professionals are characterised by their scholastic background from reputable Universities and possess excellent reputation for quality service delivery and strict adherence ethical standards.</p>
                    <Divider className='my-10 bg-black'/>
                {articles.map((article, i) => (
                    <Link href={`/career/${article.id}`} className='mt-6'>
                        <div key={i} className='flex gap-4 items-center '>
                       <div className='border flex justify-between p-4 items-center w-full hover:bg-[#FFF1C6] hover:border-none'>
                       <p className='text-[25px] font-[500]'>{article.title}</p>
                    <p className='text-[25px] font-[500]'>{'>'}</p>
                       </div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className='md:w-[45%]'>
                <Image src={Gig} alt=''/>
            </div>
        </div>

       
    </main>
  )
}

export default Body