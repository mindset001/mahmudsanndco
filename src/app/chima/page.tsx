import Image from 'next/image'
import React from 'react'
import Man from '../../../public/images/man.png'
import Hero from './component/Hero'
import Body from './component/Body'
import Newsletter from '../component/Newsletter'

function page() {
  return (
    <main className=''>
       <Hero/>
       <Body/>
       <Newsletter/>
    </main>
  )
}

export default page