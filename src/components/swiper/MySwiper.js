import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductContent from "../student/whatNext/ProductContent";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './mySwiper.scss';


export default function MySwiper({ lists }) {
  return (
    <Swiper
      watchSlidesProgress={true}
      spaceBetween={30}
      slidesPerView={5}
      className="mySwiper"
    >
      {lists?.map((data,index) => (
        <SwiperSlide virtualIndex={index} key={data.id}>
          <ProductContent {...data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
