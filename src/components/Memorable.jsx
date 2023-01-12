import React from "react";

import image from "/assets/about-img.jpg";

const Memorable = () => {
  return (
    <div className="bg-greyLight w-full pt-8 pb-16 px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={image}
            alt="/"
            className="w-[60%] sm:w-[50%] h-[100%] lg:w-[24rem] lg:h-[18rem] shadow-boxAbout"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-green text-xl md:text-2xl font-semibold">
            Memorable Outdoor Experiences
          </h3>
          <p className="text-xs md:text-sm my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
            officiis cum perspiciatis praesentium doloremque repellendus quia
            odit laudantium, dicta libero minus natus non aspernatur iusto quas,
            repudiandae in facere. Soluta?
          </p>
          <button className="text-xs md:text-sm border-2 border-black w-24 md:w-28 py-1">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memorable;
