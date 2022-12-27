import React from "react";
import { Image } from "react-bootstrap";
import StarIcon from "../../../assets/svg/student/star.svg";
import StarhalfIcon from "../../../assets/svg/student/starhalfIcon.svg";

export default function Raiting({ number }) {
  const isDecimal = number % 2 > 0 ? true : false;
  console.log(isDecimal, Math?.floor(number), number % 2);

  return (
    <div className="raiting-row">
      {Array(Math?.floor(number))
        ?.fill()
        ?.map((_, idx) => (
          <Image key={idx} src={StarIcon} alt="star-icon" />
        ))}
      {isDecimal && <Image src={StarhalfIcon} alt="star-icon" />}
    </div>
  );
}
