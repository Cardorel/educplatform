import React from "react";
import { Image } from "react-bootstrap";
import BgBottom from "../../../assets/svg/student/bgBottom.svg";
import HeaderBg from "../../../assets/images/BG_fon.png";
import { studentHeaderData } from "../../../assets/consts/data";
import HeaderSwiper from "../../swiper/HeaderSwiper";

export default function HeaderStudent() {
  return (
    <section className="student-row student-row-header">
      <div className="student-swiper">
        <HeaderSwiper lists={studentHeaderData} />
      </div>
      <div className="bg-bottom">
        <Image src={BgBottom} alt="bg-bottom" />
      </div>
      <div className="bg-header">
        <Image src={HeaderBg} alt="img-bg" />
      </div>
    </section>
  );
}
