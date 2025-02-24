
import React from 'react';
import Image from 'next/image'; // Correct import
import profileImage from '../../../assets/images/profile.webp'; // Correct import

const Hero = () => {
  return (
    <div className="flex flex-col items-center md:justify-around gap-8 px-5 text-center md:flex-row md:text-left md:gap-14 md:px-16 md:mt-14">
      
      {/* Left Content */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <p className="text-blue-400 text-lg md:text-xl">Hi, my name is</p>
        <h1 className="text-slate-200 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Talha Nawaz.
        </h1>
        <p className="text-slate-400 text-2xl font-semibold sm:text-3xl md:text-5xl">
          I build complex ideas into scalable web ecosystems.
        </p>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          I design and deploy full-stack solutions that solve real-world problems, 
          from dynamic SaaS platforms to fully AI-integrated web applications. 
          My toolkit? Next.js for speed, Node.js for power, and SQL/NoSQL databases for precision.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
  {/* Glowing Background */}
  <div className="absolute inset-0 bg-blue-500 blur-xl rounded-full opacity-50 animate-pulse animate-glow"></div>

  {/* Profile Image */}
  <Image 
    src={profileImage} 
    alt="profile-image" 
    width={400} 
    height={400} 
    className="relative w-full h-full object-cover rounded-full shadow-lg md:mt-4 "
  />
</div>


    </div>
  );
};

export default Hero;
