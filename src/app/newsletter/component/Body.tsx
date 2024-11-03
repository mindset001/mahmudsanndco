import React from 'react'
import { articles } from '../component/data'
import Image from 'next/image'
import Link from 'next/link'

function Body() {
  return (
    <main className='w-full mt-20 flex flex-col justify-center items-center'>
      <div className='w-[90%] md:w-[80%]'>
        <div className='grid grid-cols-1 gap-4'>
        {articles.map((item, i) => (
          <div key={i}>
           <div className='flex'>
          <div className='w-1/2 '>
          <Image src={item.image} alt='' width={800} height={800} className='w-full h-full' />
          </div>
           <div className='bg-[#FFF1C6] flex flex-col justify-between w-1/2 pl-10 p-6'>
            <div><p className='text-[16px] font-[600]'>{item.date}</p></div>
            <div><p className='text-[#000] text-[14px] md:text-[20px] font-[600]'>{item.title}</p>
            <Link href={`/newsletter/${item.id}`}>
            <div className='mt-4 border rounded-full flex justify-center items-center border-[#000] w-[14px] h-[14px]'>
                                                <svg className="w-4 h-4 text-[#000] font-[700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div></Link>
                                            <p className='text-[#000] text-[12px] md:text-[16px] font-[400] mt-4'>{item.dept}</p>
            </div>
            <div>
                <p className='text-[#5C5A5A] text-[10px] md:text-[14px] font-[400]'>{item.description}</p>
                <p className='text-[#000] text-[12px] md:text-[16px] font-[600]'>By {item.name}</p>
            </div>
           </div>

            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  )
}

export default Body
