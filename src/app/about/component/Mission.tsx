import React from 'react'
import Lady from '../../../../public/images/Principal2.png'
import Image from 'next/image'
import { title } from 'process'

function Mission() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='md:w-[80%] flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className='w-[80%] md:w-[40%]'>
            <div className=''>
                <h1 className='text-[16px] md:text-[35px] font-[600] text-center mt-4 md:mt-0 md:text-left'>Our Mission</h1>
                <div className='flex flex-col gap-4 md:gap-10 mt-6 text-center'>
                    {Miss.map((item, i) => (
                        <div key={i}>
                            <ul className='flex text-center'>
                                <li className='list-disc gap-4 text-[12px] md:text-[18px] font-[400] text-left' >{item.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-[24px] md:text-[35px] font-[600] text-center md:text-left'>Our Vision</h1>
                <div className='flex flex-col gap-10 mt-6'>
                    {Viss.map((item, i) => (
                        <div key={i}>
                            <ul className='flex'>
                                <li className='list-disc gap-4 text-[12px] md:text-[18px] font-[400]' >{item.title}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div>
                <Image src={Lady} alt='' className='w-[502px] '/>
            </div>
        </div>
    </main>
  )
}

export default Mission


const Miss = [
    {title: 'A one-stop top notch legal service provider '},
    {title: 'Providing exceptional tailored legal services '},
    {title: 'Pioneering positive change in legal industry'},
    {title: 'To build a formidable team with highly analytical skills. '},
    {title: 'Customer driven law firm providing timely and efficient services'},
    {title: 'Professional poise'},
    {title: 'Efficient service delivery and customer satisfaction.'},

]

const Viss = [
    {title: 'A one-stop top notch legal service provider '},

]