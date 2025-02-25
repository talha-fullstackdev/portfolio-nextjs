import React from 'react'
import ServicesAnimation from './ServicesAnimation'
import ServicesDetails from './ServicesDetails'

const Services = () => {
  return (
    <div> 
        <h2>What I Do</h2>
        <div className="">
        <ServicesAnimation/>
        <ServicesDetails/>
        </div>
    </div>
  )
}

export default Services