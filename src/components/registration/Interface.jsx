import React from "react";
import { Image } from "react-bootstrap";
import Img from "../../assets/images/userImg.png";
import InterfaceButton from "../common/InterfaceButton";
import SoundIco from "../../assets/svg/chat/sonIcon.svg";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function Interface() {
  const navigate = useNavigate();
  return (
    <div className="interface">
      <div className="row">
        <div className="col">
          <div>
            <Image src={Img} alt="user" />
          </div>
          <p>Якщо людина в мережі</p>
        </div>
        <div className="col">
          <div>
            <Image src={Img} alt="user" />
          </div>
          <p>Якщо людина на конференції/зайнята</p>
        </div>
        <div className="col">
          <div>
            <Image src={Img} alt="user" />
          </div>
          <p>Якщо людина не в мережі</p>
        </div>
        <div className="col">
          <div>
            <Image src={Img} alt="user" />
          </div>
          <p>Якщо людина просить не турбувати</p>
        </div>
        <div className="col">
          <div>
            <Image src={Img} alt="user" />
          </div>
          <p>Якщо людина просить не турбувати</p>
        </div>
        <div className="col">
          <InterfaceButton text="Текст" />
          <p>Якщо людина просить не турбувати</p>
        </div>
        <div className="col">
          <InterfaceButton text="20:22" />
          <p>Якщо людина просить не турбувати</p>
        </div>
        <div className="message-col">
          <div className="btn-content">
            <button>
              <Image src={Img} alt="user" />
              Текст повідомлення
            </button>
          </div>
          <div className="img-content">
            <Image src={SoundIco} alt="sound-ico" />
          </div>
        </div>
        <p className="text-bottom">
          Нижня полоска відображає скільки людей продивилось повідомлення
        </p>
      </div>
      <div className="row">
        <p>Налаштування: камери (фон і тд), масштаб, мікрофону, звуку, </p>
        <div className="btns-content">
          <button className="btn blue">Категорія</button>
          <button className="btn orange">Категорія</button>
          <button className="btn red">Категорія</button>
          <button className="btn vinous">Категорія</button>
          <div className="btn-parent">
            <button className="btn vantablack">Категорія</button>
          </div>
          <button className="btn white">Людина без категорії</button>
        </div>
      </div>
      <div className="row continue-btn">
        <Button
          text="ПРОДОВЖИТИ"
          padding="15px 200px"
          handleClick={() => navigate("/student")}
        />
      </div>
    </div>
  );
}
