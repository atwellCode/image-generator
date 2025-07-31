/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion, useInView } from "framer-motion";

const BuyCredit = () => {
  const { user } = useContext(AppContext);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="border border-gray-400 px-10 py-2 rounded-full mb-6"
      >
        Our Plans
      </motion.button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-3xl font-medium mb-6 sm:mb-10"
      >
        Choose The Plans
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md border rounded-lg py-12 px-8 text-gray-600 transition-all duration-300"
          >
            <img width={40} src={assets.logo_icon} alt="Lock-Icon" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6 mb-8">
              <span className="text-3xl font-medium">${item.price}</span> /{" "}
              {item.credits} Credits
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gray-800 text-white text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Buy Now"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
