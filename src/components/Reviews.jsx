import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Title from "./Title";
import { dataReviews } from "./DataReviews";
import CardReviews from "./CardReviews";

const Reviews = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="max-w-[1000px] mx-auto">
        <Title title="Client`s Reviews" />
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          loop={true}
          className="swiper__reviews w-[80%] sm:w-[90%] lg:w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
        >
          {dataReviews.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardReviews
                  url={item.url}
                  name={item.name}
                  profession={item.profession}
                  comment={item.comment}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
