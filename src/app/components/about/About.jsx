import React from 'react'
import AboutMe from './AboutMe'
import AboutAnimation from './AboutAnimation'
const About = () => {
  return (
    <div className='px-8 mt-14 md:mt-20 md:flex md:justify-around  md:px-10 md:gap-8'>
        <AboutMe/>
        <AboutAnimation/>
    </div>
  )
}

export default About