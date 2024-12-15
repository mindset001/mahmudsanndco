import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/eleja.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-full flex flex-col md:flex-row justify-center items-center my-10 md:my-40'>
        <div className='w-[80%] md:w-[80%] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
            <div className='w-full md:w-[45%]'>
                <div>
                   <div className='hidden md:block'>
                   <h1 className='text-[28px] font-[500] capitalize'> ELEJA BANU ABDULRAHMAN LL.B, B.L</h1>
                    <h2 className='text-[20px] font-[600]'>Counsel</h2>
                    <Divider className='bg-black w-[80%]'/>
                   </div>

                    <div>
                    <h1 className='text-[28px] font-[500]'>Background</h1>
                    <p className='font-[400] text-[16px] text-justify'>Eleja Banu Abdulrahman, Counsel, holds an LL.B in Common and Islamic Law (Best Graduating Student) from Al-Hikmah University, Ilorin, and a B.L from the Nigerian Law School (2022); he is currently pursuing an LL.M at Nile University of Nigeria. With professional experience at M.A. Mahmud SAN & Co (NYSC Associate), R.A. Lawal Rabana & Co (Law School Extern), and K.K. Eleja & Co (Intern), his areas of interest include Corporate Law Practice, Public-Private Partnerships (PPPs), Electoral Matters, Commercial Law, Civil and Criminal Litigation, and ADR. He is a member of the Nigerian Bar Association (NBA) and an Associate Member of the Institute of Chartered Mediators and Conciliators (ICMC).</p>
            
                    </div>
                </div>
                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>Masters of Law (LLM) Nile University of Nigeria (in view)</li>
                        <li>Barrister at Law (BL) Nigerian Law School 2022</li>
                        <li>Institute of Chartered Mediators and Conciliators. 2022</li>
                        <li>Bachelor of Law (LLB) Common and Islamic Law, Alhikmah University Ilorin 2020</li>
                        
                    </ul>
                </div>

                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>Litigation and Corporate Practice</li>
                        
                        
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-center md:items-start'>
            <div className='block md:hidden w-full'>
            <h1 className='text-[28px] font-[500] capitalize'> ELEJA BANU ABDULRAHMAN LL.B, B.L</h1>
            <h2 className='text-[20px] font-[600]'> Counsel</h2>
                    <Divider className='bg-black w-[80%]'/>
                   </div>
                <Image src={Man} alt='' />
                <div className='hidden md:block'>
                    <h1 className='text-[35px] font-[600] my-10'>Contact Lawyer</h1>
                    <form action="" className='w-[80%]'>
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
        </div>
        <div className='block md:hidden w-[80%]'>
                <h1 className='text-[35px] font-[600] my-10'>Contact Lawyer</h1>
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
    </main> 
    )
}

export default Body