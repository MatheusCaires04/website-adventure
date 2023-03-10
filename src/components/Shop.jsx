import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Title from "./Title";
import { dataShop } from "./DataShop";
import CardShop from "./CardShop";

const Shop = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Featured Products" />
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-[60%] md:w-[70%] lg:w-full"
        >
          {dataShop.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardShop
                  product={item.product}
                  url={item.url}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
