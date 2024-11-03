'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function Practice() {

 

    return (
        <main className='hero-two flex flex-col justify-center items-center'>
            <div className='w-[80%] my-20'>
                <div className='flex justify-between items-center border-b pb-4 border-[#FFF1C6]'>
                    <h1 className='text-[#CDA233] font-[600] text-[16px] md:text-[35px]'>Our Practice Areas</h1>
                    <Link href='/practice'>
                    <button className='flex items-center gap-2'>
                        <p className='text-[12px] font-[700] text-[#FFFFFF]'>Read More</p>
                        <div className='border border-[#CDA233] rounded-[50px] md:h-[40px] h-[20px] md:w-[40px] w-[20px] flex justify-center items-center text-[#CDA233]'>{'>'}</div>
                    </button>
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    {data.map((item, i )=> (
                        <div
                            key={i}
                          
                        >
                            <div className='group flex gap-2'>
                                <div className='w-[8px] bg-[#FFF1C6] hidden group-hover:block'></div>

                               <div className='group-hover:bg-[#CDA233] flex gap-2 p-4'>
                               <h4 className='text-[#FFF1C6] text-[14px] font-[400]'>{item.id}</h4>
                                <div>
                                    <h3 className='text-[#CDA233] text-[20px] font-[500] group-hover:text-[#000]'>{item.title}</h3>
                                    <p className='text-[#FFFFFF] text-[14px] font-[400] md:w-[401px] group-hover:text-[#fff]'>{item.description}</p>
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

export default Practice


const data = [
    { id: '01', title: 'General Litigation', description: 'At our law firm, our experienced team of litigators is dedicated to providing comprehensive General Litigation services tailored to meet the diverse legal needs of our clients.' },
    { id: '02', title: 'IT & Telecommunication', description: 'Our dedicated team specialises in IT and Telecommunication law, offering comprehensive legal services tailored to the dynamic landscape of technology and communications.' },
    { id: '03', title: 'Energy Law', description: 'Discover unparalleled legal support in the energy sector at M.A Mahmud SAN & Co.' },
    { id: '04', title: 'Property Law & Conveyance', description: 'Our team specialises in providing comprehensive services tailored to the complexities of real estate transactions.' },
    { id: '05', title: 'Financial Services', description: 'Our dedicated team specialises in a range of financial matters, ensuring robust legal support tailored to your unique needs.' },
    { id: '06', title: 'Human Right', description: 'We specialise in providing comprehensive legal services to individuals and organisations striving to uphold and protect human rights.' },
    { id: '07', title: 'Security Regulations', description: 'Your go-to partner for Securities Regulation.' },
    { id: '08', title: 'Intellectual Property', description: 'Our seasoned team specializes in safeguarding your creative and innovative assets.' },
    { id: '09', title: 'Economic Regulations', description: 'Ensuring your business aligns with evolving economic regulations is crucial.' },

    { id: '10', title: 'Aviation', description: 'Your destination for expert guidance in Aviation Law. Our dedicated legal team specialises in navigating the complexities of the aviation industry.' }
];