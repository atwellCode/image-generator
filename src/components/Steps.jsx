/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { stepsData } from "../assets/assets";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Steps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center my-32 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl mb-2 font-semibold"
      >
        How it Works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-600 mb-8"
      >
        Transform Words into Stunning Images
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-4 w-full max-w-3xl text-sm"
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Steps;
