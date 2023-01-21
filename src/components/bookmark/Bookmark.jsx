import React from "react";
import { interestCourse } from "../../assets/consts/data";
import HeaderInterestContainer from "../file/HeaderInterestContainer";
import ButtonWithArrow from "../common/ButtonWithArrow";
import { Image } from "react-bootstrap";
import "./bookmark.scss";

import ContactBig from "../../assets/svg/interest/contactBig.svg";
import UserSearch from "../../assets/svg/interest/userSearch.svg";
import Umbrolla from "../../assets/svg/interest/umbrolla.svg";
import Screen from "../../assets/svg/interest/screen.svg";
import UserContact from "../../assets/svg/interest/userContact.svg";
import CrossIco from "../../assets/svg/interest/cross.svg";

export default function Bookmark() {
  return (
    <HeaderInterestContainer interests={interestCourse}>
      <div className="bookmark-interest">
        <div className="bookmark-header">
          <h4>Мої закладки:</h4>
        </div>
        <div className="bookmark-row">
          <div className="bookmark-col">
            <div className="bookmark-body">
              <div className="img-content">
                <div className="img-first">
                  <Image src={ContactBig} alt="image" className="img-bg" />
                  <p>Курси</p>
                </div>
                <div className="img-left">
                  <div className="cross">
                    <Image src={CrossIco} alt="image" className="img-bg" />
                  </div>
                  <div className="img-second">
                    <Image src={UserContact} alt="image" className="img-bg" />
                    <p>Ментори</p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="bookmark-col">
            <div className="bookmark-body">
              <div className="img-content">
                <div className="img-first">
                  <Image src={UserSearch} alt="image" className="img-bg" />
                  <p>Вакансії</p>
                </div>
                <div className="img-left">
                  <div className="cross">
                    <Image src={CrossIco} alt="image" className="img-bg" />
                  </div>
                  <div className="img-second">
                    <Image src={Umbrolla} alt="image" className="img-bg" />
                    <p>Роботодавці</p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="bookmark-col">
            <div className="bookmark-body">
              <div className="img-content">
                <div className="img-first">
                  <Image src={Screen} alt="image" className="img-bg" />
                  <p>Назва</p>
                </div>
                <div className="img-left">
                  <div className="cross">
                    <Image src={CrossIco} alt="image" className="img-bg" />
                  </div>
                  <div className="img-second">
                    <Image src={Screen} alt="image" className="img-bg" />
                    <p>Назва</p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="bookmark-col">
            <div className="bookmark-body">
              <div className="img-content">
                <div className="img-first">
                  <Image src={Screen} alt="image" className="img-bg" />
                  <p>Назва</p>
                </div>
                <div className="img-left">
                  <div className="cross">
                    <Image src={CrossIco} alt="image" className="img-bg" />
                  </div>
                  <div className="img-second">
                    <Image src={Screen} alt="image" className="img-bg" />
                    <p>Назва</p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
        </div>
      </div>
    </HeaderInterestContainer>
  );
}
