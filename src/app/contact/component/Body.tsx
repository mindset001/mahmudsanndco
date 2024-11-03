import { Select } from 'antd'
import Image from 'next/image'
import Tower from '../../../../public/images/tower.png'
import React from 'react'

function Body() {
    return (
        <main className='flex flex-col justify-center items-center mt-20'>
            <div className='w-[80%] flex  flex-col md:flex-row justify-between items-start'>
                <div className='md:w-[40%]'>
                    <div>
                        <h1 className='text-[35px] font-[600] mb-10'>Make An Enquiry</h1>

                        <p className='text-[16px] font-[400] text-justify'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated
                            to providing tailored legal services, creating timely and efficient legal solutions. </p>
                    </div>

                    <div className='mt-10'>
                        <form action="" className='w-full'>
                            <div className='w-full flex gap-4'>
                                <input type='text' placeholder='Type your name...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />

                                <input type='email' placeholder='Type your email...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />
                            </div>
                            <div className='mt-6'>
                                <p className='text-[#C3BDBD] text-[16px] font-[400]'>Area Advisory</p>

                                <div className='w-full h-[40px] rounded-[50px] mt-4'>
                                    <Select
                                        showSearch
                                        placeholder="Select a person"
                                        className='w-full h-[40px] rounded-[50px]'
                                        options={[
                                            { value: '1', label: 'Business Law' },
                                            { value: '2', label: 'Lucy' },
                                            { value: '3', label: 'Tom' },
                                        ]}
                                    />
                                </div>
                                <div className='mt-6'>
                                    <textarea placeholder='Type Something' className='border w-full h-[148px] rounded-[23px] p-2'>

                                    </textarea>
                                </div>

                                <button className='bg-black rounded-[50px] text-[#fff] p-4 mt-6 w-[155px] h-[55px]'>Book Now</button>
                            </div>

                            <div>

                            </div>
                        </form>
                    </div>
                </div>

                <div className='md:w-[45%]'>
                    <div className='flex  gap-4'>
                        <div className='rounded-full bg-[#D9D9D9] h-[67px] w-[68px]'></div>
                        <div>
                            <h2 className='text-[25px] font-[400] leading-[30.48px] mb-2'>Location</h2>
                            <p className='text-[14px] font-[400] leading-[20px]'>No. 9 Bozoum Close, Off Adetokunbo Ademola,<br />
                                Behind AP Plaza,<br />
                                Wuse II,  Abuja.</p>
                        </div>
                    </div>

                    <div className='flex  gap-4 my-6'>
                        <div className='rounded-full bg-[#D9D9D9] h-[67px] w-[68px]'></div>
                        <div>
                            <h2 className='text-[25px] font-[400] leading-[30.48px] mb-2'>Phone</h2>
                            <p className='text-[14px] font-[400] leading-[20px]'>(+234) 8033 1171 97</p>
                        </div>
                    </div>

                    <div className='flex  gap-4'>
                        <div className='rounded-full bg-[#D9D9D9] h-[67px] w-[68px]'></div>
                        <div>
                            <h2 className='text-[25px] font-[400] leading-[30.48px] mb-2'>Email</h2>
                            <p className='text-[14px] font-[400] leading-[20px]'>rahusachamberssan@gmail.com <br /> rahusachambers@yahoo.com</p>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <Image src={Tower} alt='' className='md:w-[500px] md:h-[500px]'/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body