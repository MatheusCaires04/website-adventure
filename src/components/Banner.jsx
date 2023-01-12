import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { dataBanner } from "./DataBanner";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <Swiper modules={[Navigation]} navigation className="w-full h-full">
        {dataBanner.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`swiperSecond${index} relative px-8`}
            >
              <img
                src={item.url}
                alt="/"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              />
              <div className="h-full max-w-[1100px] px-8 md:px-0 mx-auto flex flex-col justify-center items-center md:items-end">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-medium">
                    {item.title}
                  </h2>
                  <h1 className="text-3xl md:text-5xl text-green font-bold mt-1 mb-3">
                    {item.subTitle}
                  </h1>
                  <p className="text-xs md:text-sm w-full md:w-[30rem]">
                    {item.text}
                  </p>
                  <button className="border-2 border-black w-24 md:w-32 text-xs md:text-sm font-medium py-1 mt-4 hover:bg-black hover:text-white duration-150">
                    Get Started
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
