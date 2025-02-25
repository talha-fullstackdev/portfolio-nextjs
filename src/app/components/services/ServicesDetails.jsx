// import React from 'react'
// import data from './data'
// import Image from 'next/image'
// const ServicesDetails = () => {

//   return (
//     <div className='mt-6'>
//         <h2 className='text-center text-2xl text-slate-400'>Full stack development</h2>
//         <div className="mt-4 flex flex-wrap gap-4">
//         {data.map((item)=>(
//             <div className="">
//              <Image src={item.icon} alt='image' title={item.tooltip}/>
//             </div>
//         ))}
//         </div>
//         <div className="">
//             <li>Building responsive static/dynamic websites using Next.js</li>
//             <li>Building responsive Single Page Apps in React.js</li>
//             <li>Converting Figma designs into Webpages</li>
//         </div>
//     </div>
//   )
// }

// export default ServicesDetails
import React from 'react';
import data from './data';
import Image from 'next/image';

const ServicesDetails = () => {
  return (
    <div className='mt-10 px-6 flex flex-col gap-8'>
      <h2 className='text-center text-3xl font-semibold text-gray-400'>Full Stack Development</h2>
      
      <div className='mt-6 flex flex-wrap justify-center gap-8 md:w-[600px]'>
        {data.map((item, index) => (
          <div key={index} className='flex cursor-pointer items-center justify-center w-16 h-16 bg-slate-600 rounded-full shadow-md p-2'>
            <Image src={item.icon} alt='image' title={item.tooltip} width={40} height={40} />
          </div>
        ))}
      </div>
      
      <div className='mt-6 text-slate-400 md:mt-4 '>
          <p className='mt-2'>Building responsive static/dynamic websites using Next.js</p>
          <p className='mt-2'>Building responsive Single Page Apps in React.js</p>
          <p className='mt-2'>Converting Figma designs into webpages</p>

      </div>
    </div>
  );
};

export default ServicesDetails;