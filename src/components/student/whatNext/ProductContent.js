import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import Raiting from "./Raiting";

export default function ProductContent({
  image,
  id,
  title,
  name,
  rating,
  price,
  offerPrice,
}) {
  const naviagte = useNavigate();
  const handleClick = () => {
    naviagte(`student/${id}`);
  };
  return (
    <div className="product-content" key={id}>
      <div className="product-image-content">
        <Image className="product-image" alt="product-image" src={image} />
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="product-name">{name}</p>
      <div className="product-rating">
        <p>{rating}</p>
        <Raiting number={rating} />
      </div>
      <div className="price-content">
        <p className="price">{price * (1 - offerPrice / 100)} грн</p>
        {offerPrice !== 0 && (
          <p className="price-offered">
            {price === 0 ? "безкоштовно" : price + " грн"}
          </p>
        )}
      </div>
      <div className="product-btn">
        <Button
          handleClick={handleClick}
          text="Перейти до курсу"
          padding="15px 25px"
        />
      </div>
    </div>
  );
}
