"use client"
import React from 'react'
import Lottie from 'lottie-react';
import aboutAnimation from "../../../assets/images/aboutme.json"
const AboutAnimation = () => {
  return (
    <div>
    <Lottie 
      loading="lazy"
      animationData={aboutAnimation} 
      className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg mx-auto sm:mx-0"
    />
    </div>
  )
}

export default AboutAnimation