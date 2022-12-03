import React, { useState } from "react";
import { Image } from "react-bootstrap";
import SimpleMap from "../common/GoogleCarte";
import MapIcon from "../../assets/svg/mapIcon.svg";

export default function ContactRight() {
  const [zoom, setZoom] = useState(17);
  return (
    <div className="contact-right">
      <h3 className="contact-right-title">Потрібна додаткова інформація?</h3>
      <h6 className="contact-right-sub-title">
        На цій сторінці ви знайдете різні способи зв’язку з нами:
      </h6>
      <div className="contact-info">
        <h3 className="contact-info-title">Контактна інформація</h3>
        <div className="contact-info-content">
          <div>
            <h5>Наш головний офіс:</h5>
            <p>вул. Нижній Вал, 33, 5 поверх, офіс. 307</p>
          </div>
          <div>
            <h5>Телефони:</h5>
            <div className="info-paragraphs">
              <p>+38 044 555 33 44</p>
              <p>+38 097 555 33 44</p>
            </div>
          </div>
          <div>
            <h5>Цілодобова допомога в пошті:</h5>
            <p>questions@ucs.ua</p>
          </div>
        </div>
      </div>
      <div className="map-container">
        <SimpleMap zoom={zoom} />
        <div className="btn-map-content">
          <div className="btns-map">
            <button onClick={() => setZoom((zoomNum) => zoomNum + 1)}>+</button>
            <button onClick={() => setZoom((zoomNum) => zoomNum - 1)}>-</button>
          </div>
          <div>
            <div className="icon-content">
              <p>Ми тут:</p>
              <Image src={MapIcon} alt="map-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
