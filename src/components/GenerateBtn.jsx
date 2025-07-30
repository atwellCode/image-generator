import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

const GenerateBtn = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <div className="pb-16 text-center">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
       text-neutral-800 py-6 md:py-16"
      >
        See The Magic. Try Now
      </h1>

      {/* 3. Add onClick to navigate */}
      <button
        onClick={() => navigate("/result")}
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full
         bg-black text-white m-auto hover:scale-105 transition-all duration-300"
      >
        Generate Image
        <img className="h-6" src={assets.star_group} alt="star icon" />
      </button>
    </div>
  );
};

export default GenerateBtn;
