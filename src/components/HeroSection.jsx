import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center my-20 text-center px-4">
      {/* Badge */}
      <div className="text-stone-500 inline-flex gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500">
        <p>Best Text to Image Generator</p>
        <img src={assets.star_icon} alt="star icon" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10">
        Turn text to <span className="text-blue-600">Image</span>, in seconds
      </h2>

      {/* Subtext */}
      <p className="text-center max-w-xl mx-auto mt-5 mb-8 text-gray-600">
        Unleash your creativity with AI — turn your imagination into visual art in seconds.
        Just type, and watch the magic happen!
      </p>

      {/* Generate Button */}
      <button
        onClick={() => navigate("/result")}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-10 py-2.5 flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-all"
      >
        Generate Image
        <img className="h-6" src={assets.star_group} alt="generate icon" />
      </button>

      {/* Sample Images */}
      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <img
              key={index}
              className="hover:scale-105 transition-all duration-300 max-sm:w-16 sm:w-20 rounded-md shadow-md cursor-pointer"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`sample ${index + 1}`}
              width={70}
            />
          ))}
      </div>

      {/* Navigation Prompt */}
      <p
        onClick={() => navigate("/result")}
        className="mt-4 text-sm text-neutral-600 cursor-pointer hover:underline"
      >
        Generate Image from Imagify
      </p>
    </div>
  );
};

export default HeroSection;
