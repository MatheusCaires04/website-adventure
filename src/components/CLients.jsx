import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const clients = [
  { url: "/assets/client-logo-1.png" },
  { url: "/assets/client-logo-2.png" },
  { url: "/assets/client-logo-3.png" },
  { url: "/assets/client-logo-4.png" },
];

const CLients = () => {
  return (
    <div className="w-full px-8 py-12">
      <Swiper
        className="max-w-[1100px] mx-auto swiper__clients"
        loop={true}
        modules={[Navigation]}
        navigation
        spaceBetween={70}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          980: {
            slidesPerView: 4,
          },
        }}
      >
        {clients.map((image, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img src={image.url} alt="/" className="w-36 h-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CLients;
