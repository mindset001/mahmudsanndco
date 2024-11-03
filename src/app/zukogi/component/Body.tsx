import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/zukogi.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-full flex flex-col md:flex-row justify-center items-center my-10 md:my-40'>
        <div className='w-[80%] md:w-[80%] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
            <div className='w-full md:w-[45%]'>
                <div>
                   <div className='hidden md:block'>
                   <h1 className='text-[28px] font-[500] capitalize'> AMINA1 T. ZUKOGI LL.B, BL, LL.M</h1>
                    <h2 className='text-[20px] font-[600]'>HOD</h2>
                    <Divider className='bg-black w-[80%]'/>
                   </div>

                    <div>
                    <h1 className='text-[28px] font-[500]'>Background</h1>
                    <p className='font-[400] text-[16px] text-justify'>Amina obtained her L.L.B (Hons) from the University of Wales, Cardiff in the United Kingdom in 2004, called to the Nigerian Bar in 2006. She further obtained her LLM in Petroleum Law and Policy from the University of Dundee, Scotland, United Kingdom 2010.</p>
                         <p className='mt-4 font-[400] text-[16px] text-justify'>Amina commenced her early career as an intern in the then Dunleavy & Co Solicitors, now AMA Law in Cardiff, United Kingdom, Agenda for Reconciliation, an organ of Initiative of change in Caux, Switzerland, Commonwealth Magistrates and Judges Association, London. She commenced her legal career in Nigeria with the Court of Justice, ECOWAS, Abuja, in 2007, as a Youth Corp Member. She was appointed Assistant Manager Legal/Company Secretary Gajere Oil and Gas Division from 2010 - 2013. Amina joined our practice in 2013 and has risen through the ranks, she currently heads our IT/Research Department and also the coordinator Interns, Externs and Corp Members. </p>
                         <p className='mt-4 font-[400] text-[16px] text-justify'>She has diversified legal experience with a flair in Legal research and a keen interest in Transactions with particular emphasis in Cross Border transactions, Alternative Dispute Resolution (ADR), Legal Advisory, Legal Drafting, Cyber Law, Medical Law, Natural Resource Law and Mining Law. Amina has written several articles on a wide range of legal subjects.</p>
                    </div>
                </div>
                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>University of Wales, Cardiff L.L.B (Hons) </li>
                        <li>Nigerian Law School, BL.</li>
                        <li>University of Dundee, LLM</li>
                        
                    </ul>
                </div>

                <div>
                <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                    <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                        <li>Oil and Gas Law</li>
                        <li>Transactions</li>
                        <li>Alternative Dispute Resolution (ADR)</li>
                        <li>Legal Advisory</li>
                        <li>Legal Drafting</li>
                        <li>Cyber Law</li>
                        <li>Medical Law</li>
                        <li>Natural Resource Law</li>
                        <li>Mining Law</li>
                        
                        
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-center md:items-start'>
            <div className='block md:hidden w-full'>
                   <h1 className='text-[28px] font-[500] capitalize'> AMINA1 T. ZUKOGI LL.B, BL, LL.M</h1>
                    <h2 className='text-[20px] font-[600]'>HOD</h2>
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