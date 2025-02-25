import React from "react";
import data from "./data";
import Image from "next/image";

const ServicesDetails = () => {
  return (
    <div className="mt-10 px-6 flex flex-col gap-8">
      <h2 className="text-center text-3xl font-semibold text-gray-400">
        Full Stack Development
      </h2>

      <div className="mt-6 flex flex-wrap justify-center gap-8 md:w-[600px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group flex cursor-pointer items-center justify-center w-16 h-16 bg-slate-600 rounded-full shadow-md p-2"
          >
            <Image
              src={item.icon}
              alt="image"
              title={item.tooltip}
              width={40}
              height={40}
            />

            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 hidden w-max max-w-[200px] bg-gray-800 text-blue-400 text-xs font-medium px-3 py-2 rounded-md shadow-lg group-hover:block transition-opacity duration-300">
              {item.tooltip}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-slate-400 md:mt-4 ">
        <p className="mt-2">
          Building responsive static/dynamic websites using Next.js
        </p>
        <p className="mt-2">Building responsive Single Page Apps in React.js</p>
        <p className="mt-2">Converting Figma designs into webpages</p>
      </div>
    </div>
  );
};

export default ServicesDetails;
