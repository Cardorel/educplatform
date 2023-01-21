import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mySwiper.scss";
import { Image } from "react-bootstrap";

export default function HeaderSwiper({ lists }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="header-swiper"
    >
      {lists?.map(({ image, id, text }) => (
        <SwiperSlide key={id}>
          <Image src={image} alt={`image-${id}`} />
          <p>{text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
