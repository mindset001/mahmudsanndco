import React from 'react'
import Lady from '../../../../public/images/value.png'
import Image from 'next/image'
import { title } from 'process'

function Values() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='md:w-[80%] flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-[40%] w-1/2'>
        <Image src={Lady} className='h-full w-full' alt='' width={500} height={200}/>
            </div>
            <div className='w-1/2' >
            <div className=''>
                <h1 className='text-[28px] md:text-[35px] text-center font-[600] mt-6 md:mt-0'>Our Values</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    {data.map((item, i )=> (
                        <div
                            key={i}
                          
                        >
                            <div className='group flex gap-2 w-full'>
                                <div className='w-[8px] bg-[#FFF1C6] hidden group-hover:block'></div>

                             
                                <div  className='group-hover:bg-[#FFF1C680] flex flex-col  gap-2 p-4'>
                                    <h3 className='text-[#000] text-[20px] md:text-[28px] font-[600] group-hover:text-[#000] text-center md:text-left'>{item.title}</h3>
                                    <p className='text-[#000] text-[10px] md:text-[14px] font-[400] md:w-[531px] group-hover:text-[#000] mt-4 text-center md:text-left'>{item.description}</p>
                                </div>
                       
                            </div>

                        </div>
                    ))}
                </div>
            </div>
         
            </div>
           
        </div>
    </main>
  )
}

export default Values


const data = [
    { id: '01', title: 'Integrity', description: 'We uphold the highest standards of honesty and ethical behavior, ensuring our clients receive transparent and trustworthy legal representation. Our commitment to doing the right thing guides every decision we make.' },
    { id: '01', title: 'Competence', description: 'Our team brings a wealth of legal expertise and continuous learning to every case, ensuring the most effective solutions for our clients. We stay at the forefront of legal developments to provide knowledgeable and reliable counsel.' },
    { id: '01', title: 'Diligence', description: 'We are dedicated to meticulous and thorough work, leaving no stone unturned in our pursuit of justice. Our proactive approach ensures that every client’s needs are met with the utmost attention and care.' },
    { id: '01', title: 'Professionalism', description: 'We maintain a respectful, courteous, and responsible demeanor in all our interactions, reflecting the esteemed nature of our profession. Our clients can trust us to handle their legal matters with the utmost professionalism and discretion.' },
    
];

