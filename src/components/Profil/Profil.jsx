import React from "react";
import { Image } from "react-bootstrap";
import CoursesHeader from "../courses/CoursesHeader";
import Img from "../../assets/images/userImg.png";
import msgIcon from "../../assets/svg/chat/message.svg";
import "./profil.scss";
import ProfilContent from "./ProfilContent";

export default function Profil() {
  return (
    <div className="profil">
      <div className="profil-header">
        <CoursesHeader title2="Викладачі" title3="Однодумці" />
      </div>
      <div className="content">
        <div>
          <div>
            <h4>Ось кого ми знайшли:</h4>
            <div className="row">
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
            </div>
          </div>
          <div className="liked-name">
            <h4>Вподобані люди:</h4>
            <div className="row">
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
              <div className="col">
                <div className="col-right">
                  <Image src={Img} alt="img-user" />
                  <div className="text-content">
                    <p className="name">Ім’я користувача</p>
                    <p>Посада</p>
                  </div>
                </div>
                <div className="col-left">
                  <Image src={msgIcon} alt="message" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProfilContent
            btnText="Видалити викладачаs"
            text="Запропонувати новий курс"
          />
        </div>
      </div>
    </div>
  );
}
