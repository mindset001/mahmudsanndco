import React from 'react'
import Hero from './components/Hero'
import Next from './components/Next'
import News from '../component/Landing/News'
import Newsletter from '../component/Newsletter'
import Next2 from './components/Next2'


function page() {
  return (
    <main>
        <Hero/>
        <div className='hidden md:block'>
        <Next/>
        </div>
       <div className='block md:hidden'>
       <Next2/>
       </div>
        <News/>
        <Newsletter/>
    </main>
  )
}

export default page