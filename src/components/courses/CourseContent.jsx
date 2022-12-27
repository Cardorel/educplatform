import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReverveLetter from "../common/ReverveLetter";
import Raiting from "../student/whatNext/Raiting";

export default function CourseContent({
  image,
  isBestSeller,
  kind,
  detailContent,
  rating,
  price,
  offerPrice,
  title,
  id,
}) {
  const { teachers } = detailContent;
  return (
    <div className="course-content">
      <div className="course-content-img">
        <Image src={image} alt="img" />
        {isBestSeller && (
          <p className="paragraph">
            <ReverveLetter letters="БЕСТСЕЛЕР" />
          </p>
        )}
        {kind && <p className="certificate">Профeсійна сертифікація</p>}
      </div>
      <div className="content-body">
        <div className="name">
          <h4>{title}</h4>
          <p>Автор курсу: {teachers[0].surname + " " + teachers[0].name}</p>
        </div>
        <div className="rating">
          <p>{rating}</p>
          <Raiting number={rating} />
        </div>
        <div className="price">
          <p className="price-text">{price * (1 - offerPrice / 100)} грн</p>
          {offerPrice !== 0 && <p className="discount">{price} грн</p>}
        </div>
        <Link to={`/student/${id}`} className="btn-link">
          ПЕРЕЙТИ ДО КУРСУ
        </Link>
      </div>
    </div>
  );
}
