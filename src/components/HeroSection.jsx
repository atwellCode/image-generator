import React from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 text-center">
      <div className="text-stonr-500 inline-flex text-center gap-2 bg-white px-6 py-2  rounded-full border border-neutral-500">
        <p>Best Text to Image Generator</p>
        <img src={assets.star_icon} alt={assets.star_icon} />
      </div>

      <h2 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to <span className="text-blue-600">Image</span>, in seconds
      </h2>
      <p className="text-center max-w-xl mx-auto mt-5 mb-8">
        Unleash your creativity with AI, yout imaginations into visual art in
        seconds - just type, and watch the magic happen
      </p>
      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-10 py-2.5 flex items-center gap-2 rounded-full">
        Generate Image
        <img className="h-6" src={assets.star_group} alt={assets.star_icon} />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-2">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="hover:scale-105 
             transition-all duration-300 max-sm:w-10 cursor-pointer"
              src={index %2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={assets.sample_img_1}
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-sm text-neutral-600">Generate Image from Imagify</p>
    </div>
  );
};

export default HeroSection;
