import React from 'react'
import Lady from '../../../../public/images/value.png'
import Image from 'next/image'
import { title } from 'process'

function Values() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='md:w-[80%] flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-[40%]'>
                <Image src={Lady} alt='' />
            </div>
            <div  >
            <div className=''>
                <h1 className='text-[28px] md:text-[35px] font-[600] text-center mt-6 md:mt-0'>Our Values</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    {data.map((item, i )=> (
                        <div
                            key={i}
                          
                        >
                            <div className='group flex gap-2 w-full'>
                                <div className='w-[8px] bg-[#FFF1C6] hidden group-hover:block'></div>

                             
                                <div  className='group-hover:bg-[#FFF1C680] flex flex-col  gap-2 p-4'>
                                    <h3 className='text-[#000] text-[20px] md:text-[28px] font-[500] group-hover:text-[#000] text-center md:text-left'>{item.title}</h3>
                                    <p className='text-[#000] text-[10px]  md:text-[14px] font-[400] md:w-[531px] group-hover:text-[#000] mt-4 text-center md:text-left'>{item.description}</p>
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
    { id: '01', title: 'Integrity', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Competence', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Diligence', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    { id: '01', title: 'Professionalism', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu' },
    
];

