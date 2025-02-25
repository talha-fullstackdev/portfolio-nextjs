import React from 'react'
import ServicesAnimation from './ServicesAnimation'
import ServicesDetails from './ServicesDetails'

const Services = () => {
  return (
    <div className='px-10 md:mt-10  md:px-12 '> 
        <h2 className='text-3xl text-white font-bold text-center'>What I Do</h2>
        <div className="flex flex-col-reverse md:flex-row md:justify-center md:gap-8">
        <ServicesAnimation/>
        <ServicesDetails/>
        </div>
    </div>
  )
}

export default Services