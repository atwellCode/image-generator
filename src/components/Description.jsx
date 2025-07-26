import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl mb-2  font-semibold">
        Create AI Images
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Turn your Imaginations into Visuals
      </p>
      <div className="flex flex-col gap-5  md:gap-14 md:flex-row">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt={assets.sample_img_1}
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">Intrducted the AI-Powered Text to Image Generator</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Description;
