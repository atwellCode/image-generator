/* eslint-disable no-unused-vars */
import React, { useState, useRef, useContext } from "react";
import { assets } from "../assets/assets";
import { motion, useInView } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

const {generateImage} = useContext(AppContext)

const onSubmitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  if (input) {
    const image = await generateImage(input);
    if (image) {
      toast.success("Your image is being generated. This might take a few seconds or minutes...")
      setIsImageLoaded(true);
      setImage(image);
    } else {
      toast.error("Image could not be generated.");
    }
  }

  setLoading(false);
};


  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      {/* Image container with loading animation */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative">
          <img
            className="max-w-sm rounded-md"
            src={image}
            alt="Generated Preview"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading....</p>
      </motion.div>

      {/* Input & Generate Button */}
      {!isImageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 px-3 bg-transparent outline-none ml-8 max-sm:w-20"
            type="text"
            placeholder="Describe what you want to Generate."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-zinc-800 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </motion.button>
        </motion.div>
      )}

      {/* Buttons after image is generated */}
      {isImageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            <a href={image} download>
              Download
            </a>
          </motion.div>
        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;
