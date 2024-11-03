import React from 'react'
import Hero from './component/Hero'
import Mission from './component/Mission'
import Values from './component/Values'
import Newsletter from '../component/Newsletter'

function page() {
  return (
    <main>
        <Hero/>
        <Mission/>
        <Values/>
        <Newsletter/>
    </main>
  )
}

export default page