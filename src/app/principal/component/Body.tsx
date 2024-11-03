import Image from 'next/image'
import React from 'react'
import Man from '../../../../public/images/principal.png'
import { Divider, Select } from 'antd'

function Body() {
    return (
        <main className='z-0 w-ful flex flex-col md:flex-row justify-center items-center my-10 md:my-40'>
            <div className='w-[80%] md:w-[80%] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start'>
                <div className='w-[80%] md:w-[45%]'>
                    <div>
                        <div className='hidden md:block'>
                            <h1 className='text-[28px] font-[500] capitalize'>Mahmud Abubakar Magaji, SAN</h1>
                            <h2 className='text-[20px] font-[600]'>Principal Partner</h2>
                            <Divider className='bg-black w-[80%]' />
                        </div>

                        <div className='w-full'>
                            <h1 className='text-[28px] font-[500]'>Background</h1>
                            <p className='font-[400] text-[16px] text-justify'>Mahmud Abubakar Magaji, SAN obtained a diploma in Law in 1985 and an LLB in 1989 from University of Maiduguri. He was called to the Nigeria Bar in 1990. He also won the best prize for Criminal Law.
                                Mahmud Abubakar Magaji has practiced extensively before all the Superior Courts of records in Nigeria on matters relating to Labour, Employment, Capital Market, Telecommunication, Law of Contracts, Taxation, Banking and Finance as well as Election related matters. He also renders advisory services to Financial Institutions, Corporate Organizations, Government Agencies and Multinational Companies.</p>
                            <p className='mt-4 font-[400] text-[16px] text-justify'>He has held several positions including Executive Secretary, Niger States Pilgrims Welfare Board, Secretary/Legal Adviser, Kabo Holdings. He is Chairman of Niger State Basket Ball Association; Member New York Council of Arbitration; Member International Institute of Arbitration, London; Member Advocate for Societal and Intellectual Development (A.S.I.D); Member FCT Judicial Service Commission; Member Nigeria Bar Association Group Affinity Plan; Member Institute of Management Consultants (IMC-Nigeria); He was also appointed by the Chief Justice of Nigeria as Assessor to the Governing Bopard Disciplinary Committee of the Medical Laboratory Science Council of Nigeria (MLSCN). He is currently the Principal of Mahmud &Co., a burgeoning law firm with outstanding Legal team he heads with a reputable legal resource</p>
                            <p className='mt-4 font-[400] text-[16px] text-justify'>Mahmud A. Magaji, SAN has handled a wide range case bothering on Constitutional, Criminal and Civil Law. He is also a vast in Alternative Dispute Resolution. Being a Trial Lawyer with astute advocacy skill, this he brings to bare in his expertise in the various trials and advocacy he has handled over the years. </p>
                            <p className='mt-4 font-[400] text-[16px] text-justify'>Mahmud Abubakar Magaji’s SAN practice emphasizes business, civil, criminal litigation, ADR, Corporate/real estates, Oil and Gas, Election matters and Criminal matters. His representative clients include leaders, developers, lessors, investors, corporations and creditors.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[28px] font-[500] mt-10'>Education</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-[28px] font-[500] mt-10'>Practice Areas</h1>
                        <ul className='list-disc flex flex-col gap-4 text-[16px] mt-2'>
                            <li>Civil Litigation</li>
                            <li>Criminal Litigation</li>
                            <li>ADR</li>
                            <li>Corporate/real estates</li>
                            <li>Oil and Gas</li>
                            <li>Election matters </li>
                        </ul>
                    </div>
                </div>
              
                <div className='w-full md:w-[45%] flex flex-col items-center md:items-start'>
                    <div className='block md:hidden w-full'>
                        <h1 className='text-[28px] font-[500] capitalize'>Mahmud Abubakar Magaji, SAN</h1>
                        <h2 className='text-[20px] font-[600]'>Principal Partner</h2>
                        <Divider className='bg-black w-[80%]' />
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