/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";

const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Description = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 overflow-hidden"
    >
      {/* Heading + Subheading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl mb-2 font-semibold"
      >
        Create AI Images
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-gray-600 mb-8"
      >
        Turn your Imaginations into Visuals
      </motion.p>

      {/* Image + Text Row */}
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row">
        {/* Image Animation */}
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt="AI Sample"
        />

        {/* Text Animation */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introduced the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quisquam soluta hic assumenda, vero laborum saepe esse minima odio
            dolor reprehenderit expedita excepturi quo minus iste omnis optio
            quasi repellendus sed fuga, a qui. Illo ab doloribus a, dolor minus
            molestias iure, exercitationem excepturi beatae voluptatibus
            laudantium ipsam nihil nam!
          </p>
          <p className="text-gray-600 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quisquam soluta hic assumenda, vero laborum saepe esse minima odio
            dolor reprehenderit expedita excepturi quo minus iste omnis optio
            quasi repellendus sed fuga, a qui. Illo ab doloribus a, dolor minus
            molestias iure, exercitationem excepturi beatae voluptatibus
            laudantium ipsam nihil nam!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
