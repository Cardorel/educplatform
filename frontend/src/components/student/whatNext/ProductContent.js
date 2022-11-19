import React from "react";
import { Image } from "react-bootstrap";
import Button from "../../common/Button";
import Raiting from "./Raiting";

export default function ProductContent({
  url,
  id,
  title,
  name,
  rating,
  price,
  offerPrice,
}) {
  return (
    <div className="product-content" key={id}>
      <div className="product-image-content">
        <Image className="product-image" alt="product-image" src={url} />
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="product-name">{name}</p>
      <div className="product-rating">
        <p>{rating}</p>
        <Raiting number={rating} />
      </div>
      <div className="price-content">
        <p className='price'>{price} грн</p>
        <p className="price-offered">{offerPrice} грн</p>
      </div>
      <div className="product-btn">
        <Button text="БЕСТСЕЛЕР" padding="15px 25px" />
      </div>
    </div>
  );
}
