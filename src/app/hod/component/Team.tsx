import React from 'react'
import Right from '../../../../public/images/right.png'
import Man from '../../../../public/images/admin.png'
import Image from 'next/image'
import { Divider, Select } from 'antd'

function Team() {
  return (
    <main className='z-0 w-full flex flex-col md:flex-row justify-center items-center my-10 md:my-40'>
            <div className='w-[80%] md:w-[80%] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
                <div className='w-full md:w-[45%]'>
                    <div>
                       <div className='hidden md:block'>
                       <h1 className='text-[28px] font-[500] capitalize'> Affis A. Matanmi LL.B, B.L</h1>
                        <h2 className='text-[20px] font-[600]'>Legal Assistant To The Principal Partner</h2>
                        <Divider className='bg-black w-[80%]'/>
                       </div>

                        <div>
                        <h1 className='text-[28px] font-[500]'>Background</h1>
                        <p className='font-[400] text-[16px] text-justify'>Affis obtained his LL.B degree from the prestigious Obafemi Awolowo University (OAU) Ile- Ife in year 2012 before obtaining his B.L from Nigeria Law, Lagos Campus in Year 2014. He is currently a LL.M student in Ahmadu Bello University, Zaria. He also has a Certificate of training in Alternative Dispute Resolution Specialist (ADRS)</p>
                             <p className='mt-4 font-[400] text-[16px] text-justify'>Affis joined the esteemed law firm of Mahmud & Co in year 2016. He is presently the legal Assistant to the Principal Partner, Mr. Mahmud A. Magaji, SAN. </p>
 
                        </div>
                    </div>
                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Ahmadu Bello University, Zaria (LL.M) in View</li>
                            <li>Nigerian Law School (B.L)</li>
                            <li>Obafemi Awolowo University (LL.B)</li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Litigation</li>
                            <li>Dispute Resolution</li>
                            <li>Election/Pre-Election Related Matters</li>
                            <li>Financial Institution Advisory</li>
                            <li>Real Estate</li>
                            <li>Intellectual Property </li>
                            <li>Technology Law </li>
                            <li>Environmental Law.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-[45%] flex flex-col items-center md:items-start'>
                <div className='block md:hidden w-full'>
                       <h1 className='text-[28px] font-[500] capitalize'> Affis A. Matanmi LL.B, B.L</h1>
                        <h2 className='text-[20px] font-[600]'>Legal Assistant To The Principal Partner</h2>
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

export default Team