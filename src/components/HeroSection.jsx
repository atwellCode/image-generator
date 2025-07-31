/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const {user, setShowLogin} = useContext(AppContext);

  const onClickHandler = ()=>{
    if(user){
      navigate('/result');
    }
    else{
      setShowLogin(true);
    }
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center my-20 text-center px-4"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500"
        initial={{ opacity: 0.2, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best Text to Image Generator</p>
        <img src={assets.star_icon} alt="star icon" />
      </motion.div>

      <motion.h2
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn text to <span className="text-blue-600">Image</span>, in seconds
      </motion.h2>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5 mb-8 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI — turn your imagination into visual art
        in seconds. Just type, and watch the magic happen!
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-10 py-2.5 flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Image
        <img className="h-6" src={assets.star_group} alt="generate icon" />
      </motion.button>
      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              key={index}
              className="hover:scale-105 transition-all duration-300 max-sm:w-16 sm:w-20 rounded-md shadow-md cursor-pointer"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`sample ${index + 1}`}
              width={70}
            />
          ))}
      </motion.div>

      {/* Navigation Prompt */}
      <motion.p
        onClick={() => navigate("/result")}
        className="mt-4 text-sm text-neutral-600 cursor-pointer hover:underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generate Image from Imagify
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
