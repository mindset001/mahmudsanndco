import React from 'react'
import Hero from './Hero'
import About from './About'
import Practice from './Practice'
import Why from './Why'
import Talents from './Talent'
import News from './News'
import Newsletter from '../Newsletter'

function Landing() {
  return (
    <main>
        <Hero/>
        <About/>
        <Practice/>
        <Why/>
        <Talents/>
        <News/>
        <Newsletter/>
    </main>
  )
}

export default Landing