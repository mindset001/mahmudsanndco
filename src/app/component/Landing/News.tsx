import React from 'react'
import New1 from '../../../../public/images/news1.png'
import Image from 'next/image';
import Link from 'next/link';

function News() {
    return (
        <main className='flex flex-col justify-center items-center mt-20'>
            <div className='w-[80%]  '>
                <div className='flex justify-between items-center border-b pb-6 border-[#000]'>
                    <h1 className='text-[#000] font-[600] text-[16px] md:text-[35px]'>Latest News</h1>
                    <Link href='/news'>
                    <button className='flex items-center gap-2'>
                        <p className='text-[12px] md:text-[14px] font-[700] text-[#000]'>Read More</p>
                        <div className='border border-[#000] rounded-[50px] h-[20px] w-[20px] flex justify-center items-center text-[#000]'>{'>'}</div>
                    </button>
                    </Link>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-10 justify-between'>
                    {data.map((item, i) => (
                        <div className='flex gap-8'>
                            <div className='w-1/2'>
                                <Image src={item.image} alt='' className='h-[350px] md:h-[387px] md:w-[210px]'/>
                            </div>
                            <div className='md:w-[254px] w-1/2'>
                                <p className='text-[10px] md:text-[15px]'>{item.date}</p>
                                <h1 className='text-[#CDA233] text-[15px] md:text-[20px] font-[600] my-2 md:my-6'>{item.title}</h1>
                                <div className='w-full md:w-[254px] h-[1px] bg-black'></div>
                                <p className=' my-4 md:my-6 text-[10px] md:text-[15px]'>{item.description}</p>

                                <button className='border border-[#000] rounded-[36px] w-[50px] h-[30px] md:h-[52px] md:w-[144px] flex justify-center items-center text-[#000] hover:bg-[#000] hover:border-none hover:text-[#CDA233] text-[8px] md:text-[15px]'>Read More</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default News


const data = [
    {
        date: '26 Jan. 2024',
        image: New1,
        title: 'Character Reference & Support Letters for the criminal court', description: 'Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.'
    },
    {
        date: '26 Jan. 2024',
        image: New1,
        title: 'Character Reference & Support Letters for the criminal court', description: 'Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.'
    },
    {
        date: '26 Jan. 2024',
        image: New1,
        title: 'Character Reference & Support Letters for the criminal court', description: 'Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.'
    },
    {
        date: '26 Jan. 2024',
        image: New1,
        title: 'Character Reference & Support Letters for the criminal court', description: 'Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.'
    },
];