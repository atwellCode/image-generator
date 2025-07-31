/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion, useInView } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center my-20 py-12 overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl mb-2 font-semibold"
      >
        Customer Feedback
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-gray-600 mb-8"
      >
        What our Users Say about US!
      </motion.p>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-6 justify-center"
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white p-12 rounded-lg shadow-md w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-14"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src={assets.rating_star}
                      alt="star"
                    />
                  ))}
              </div>
              <p className="text-center text-sm">{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
