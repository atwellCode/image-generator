import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl mb-2  font-semibold">
        Customer Feedback
      </h1>
      <p className="text-lg text-gray-600 mb-8">What our User Say about US!</p>
      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((Testimonials, index) => (
          <div
            key={index}
            className="bg-white p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-14"
                src={Testimonials.image}
                alt={Testimonials.image}
              />
              <h2 className="text-xl font-semibold mt-3">{Testimonials.name}</h2>
              <p className="text-gray-500 mb-4">{Testimonials.role}</p>
              <div className="flex mb-4">
                {Array(Testimonials.stars)
                  .fill()
                  .map((item, index) => (
                    <img
                      key={index}
                      src={assets.rating_star}
                      alt={assets.rating_star}
                    />
                  ))}
              </div>
              <p className="text-center text-sm">{Testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
