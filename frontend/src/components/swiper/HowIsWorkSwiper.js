import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mySwiper.scss";
import { Image } from "react-bootstrap";
import { swiperImages } from "../../assets/consts/data";

export default function HowIsWorkSwiper({ lists }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="myHowIsWorkSwiper"
    >
      {swiperImages?.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Image src={img} alt={`image-${idx}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
