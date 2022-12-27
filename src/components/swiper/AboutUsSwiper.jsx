import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperAboutUsContent from "../aboutUs/SwiperContent";

export default function AboutUsSwiper({ lists, handleClickModal }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={30}
      keyboard={true}
      initialSlide={1}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="about-us-Swiper"
    >
      {lists?.map((item) => (
        <SwiperSlide key={item?.id}>
          <SwiperAboutUsContent
            item={item}
            handleClickModal={handleClickModal}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
