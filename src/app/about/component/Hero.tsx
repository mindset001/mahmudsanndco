import Image from 'next/image'
import React from 'react'
import About from '../../../../public/images/chair.png'

function Hero() {
  return (
    <main >
        <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[70%]'>
            <h1 className='text-[44px] font-[600]'>About Us</h1>
            </div>
            
        </div>
        <Image src={About} alt=''/>

        <div className='w-full flex justify-center items-center mt-20'>
        <div className='w-[80%]'>
          <h1 className='text-[16px] md:text-[28px] font-[500] text-center md:text-justify'>Our team of professionals are characterised by their scholastic background from reputable
             Universities and possess excellent reputation for quality service delivery and strict adherence ethical standards. </h1>

             <div className='flex flex-col md:flex-row justify-between mt-6'>
              <div className='md:w-[45%]'>
                <p className='text-justify text-[10px] md:text-[16px] font-[400]'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions. Our team of professionals are characterized by their scholastic background 
                  from reputable Universities and possess excellent reputation for quality service delivery and strict adherence ethical standard</p>
                  <p className='mt-6 text-justify text-[10px] md:text-[16px] font-[400] '>Since its founding, the firm has represented Clients in a wide range of legal issues ranging from private individuals to small businesses, large corporations and the public sector. We value the trust our clients place on us and work hard to ensure effective representation to meet the diverse legal needs. We offer personalized services to suit our client’s needs.</p>
              </div>
              <div  className='md:w-[45%]'>
              <p className='text-justify text-[10px] md:text-[16px] font-[400] mt-6 md:mt-0'>M.A. Mahmud SAN & Co, provides expert and specialist legal support for individuals, small business, Corporate bodies, public sector and International Institutions. 
                Our highly skilled team and front-line experience means we represent our clients with resilience and determination.</p>
                <p className='mt-6 text-justify text-[10px] md:text-[16px] font-[400]'>At M.A. Mahmud SAN & Co, we have been able to protect and advance the interest of our clients across the globe and in broad range of legal matters. Our knowledge and experience providing to be of real benefit to our clients. Here at the firm, we have the reputation for protecting our clients’ interest.</p>
                </div>
             </div>

        </div>
        </div>
    </main>
  )
}

export default Hero