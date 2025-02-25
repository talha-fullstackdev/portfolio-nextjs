import React from 'react'
const AboutMe = () => {
  return (
    <div>
        <div className="md:px-20">
            <h2 className='text-3xl font-semibold'>About Me</h2>
            <p className='mt-6 text-[18px] text-slate-400'>Hi, I’m Talha Nawaz, a graduate with a BS in Software Engineering from <span className='text-blue-400'> lahore Garrison University.</span> I specialize in crafting scalable, AI-driven web solutions using modern full-stack technologies. With 3+ years of hands-on experience, I excel in leveraging Next.js, React, and Node.js to build performant SaaS applications, real-time systems, and LLM-integrated platforms that solve complex user problems. My expertise spans end-to-end development, from architecting AI/LLM solutions (like OCR text extraction and chatbots) to optimizing server-side performance with Express.js, MongoDB, and PostgreSQL. I engineered AI-powered React applications that boosted user retention, while my freelance work on Upwork involved deploying custom LLM dashboards and WebSocket-driven features to streamline client workflows.</p>
        </div>
        <div className="mt-4 md:px-20">
            <p className='mt-4 text-blue-400 text-xl font-semibold'>Activities :</p>
            <p className='mt-2 text-slate-400'>As a Microsoft Learn Student Ambassador and Membership Coordinator at LGU, I organized tech workshops and events, bridging academia and industry trends while fostering innovation. Passionate about open-source, I actively contribute to global projects through Hacktoberfest and GSSoC, enhancing my collaborative coding and technical expertise. I excel in fast-paced, collaborative settings, having competed in META HackerCup, NASA Space Apps, and MLH hackathons, where I built functional prototypes and honed my problem-solving skills. My robust GitHub presence reflects my commitment to community-driven, real-world solutions.</p>
            <p className='mt-4 text-blue-400'>Microsoft Learn Student Ambassador (MLSA-β)</p>
            <p className='text-blue-400'>Microsoft Learn Student Ambassador (MLSA-β)</p>
            <p className='mt-8 text-slate-400'>Here are a few technologies I’ve been working with recently:</p>
        </div>
        <div className="mt-6 flex justify-around md:px-20 md:justify-start md:gap-32">
            <div className="flex flex-col gap-2 text-slate-400 list-disc marker:text-blue-500 pl-5">
                <li>NextJs / TypeScript</li>
                <li>ReactJs</li>
                <li>TailwindCSS</li>
                <li>PostgreSQL</li>
            </div>
               <div  className="flex flex-col gap-2 text-slate-400 list-disc marker:text-blue-500 pl-5">
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
                <li>Appwrite</li></div>
            
        </div>
    </div>
  )
}

export default AboutMe