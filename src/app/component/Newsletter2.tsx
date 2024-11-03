import { Input } from 'antd'
import React from 'react'

function Newsletter() {
  return (
    <main className='bg-[#FFF1C6] my-20 flex justify-center items-center h-[150px] md:h-[250px]'>
        <div className='w-[90%] md:w-[80%] flex items-center md:justify-center'>
            <h1 className='text-[10px] md:text-[28px] font-[500]text-[#000]'>Subscribe to Newsletters</h1>
           
            <div className='flex flex-row'>
            <Input placeholder='Enter Email' className='rounded-[23px] md:pl-4 h-[51px] md:w-[271px] md:ml-6 mr-2 md:mr-4 bg-transparent border border-[#000]'/>
            <button className='bg-[#000] rounded-[36px] px-4 md:px-8 md:py-4 font-[700] text-[16px]  text-[#fff]'>Subscribe</button>
            </div>
        </div>

    </main>
  )
}

export default Newsletter 