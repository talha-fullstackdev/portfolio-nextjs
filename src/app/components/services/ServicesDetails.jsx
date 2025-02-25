import React from 'react'
import data from './data'
import Image from 'next/image'
const ServicesDetails = () => {

  return (
    <div>
        <h2>Full stack development</h2>
        {data.map((item)=>(
            <div className="">
             <Image src={item.icon} alt='image' title={item.tooltip}/>
            </div>
        ))}
        <div className="">
            <li>Building responsive static/dynamic websites using Next.js</li>
            <li>Building responsive Single Page Apps in React.js</li>
            <li>Converting Figma designs into Webpages</li>
        </div>
    </div>
  )
}

export default ServicesDetails