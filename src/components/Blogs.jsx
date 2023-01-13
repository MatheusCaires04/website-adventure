import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { dataBlog } from "./DataBlog";
import CardBlog from "./CardBlog";
import Title from "./Title";

const Blogs = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Our Daily Posts" />
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          loop={true}
          className="w-[65%] md:w-[80%] lg:w-full swiper__blogs"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            769: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }}
        >
          {dataBlog.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardBlog
                  url={item.url}
                  title={item.title}
                  text={item.text}
                  person={item.person}
                  date={item.date}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
