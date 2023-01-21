import React from "react";
import { Image } from "react-bootstrap";

import CalendarIcon from "../../assets/svg/menu/calendar.svg";
import ChatIcon from "../../assets/svg/menu/chat.svg";
import VideoIcon from "../../assets/svg/menu/videoChat.svg";
import MoodIcon from "../../assets/svg/menu/mood.svg";
import CallIco from "../../assets/svg/menu/call.svg";
import ChallengeIco from "../../assets/svg/menu/challenge.svg";
import FlagIco from "../../assets/svg/menu/flag.svg";
import LineTop from "../../assets/svg/menu/lineTop.svg";
import LineBottom from "../../assets/svg/menu/lineBottom.svg";

import "./menu.scss";
import { Link } from "react-router-dom";
import MenuLeft from "./MenuLeft";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-left-container">
        <MenuLeft />
        <div className="top">
          <Image src={LineTop} alt="line-top" />
        </div>
        <div className="bottom">
          <Image src={LineBottom} alt="line-bottom" />
        </div>
      </div>
      <div className="menu-content">
        <div className="menu-row">
          <Link to="/account" className="menu-col profil-col">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="profil-image"
            />
          </Link>
          <Link to="/calendar" className="menu-col">
            <Image src={CalendarIcon} alt="calendar-icon" />
          </Link>
          <Link to="/chat" className="menu-col">
            <Image src={ChatIcon} alt="chat-icon" />
          </Link>
          <Link to="/video" className="menu-col">
            <Image src={VideoIcon} alt="video-icon" />
          </Link>
          <Link to="" className="menu-col">
            <Image src={CallIco} alt="chat-icon" />
          </Link>
          <Link to="" className="menu-col">
            <Image src={MoodIcon} alt="video-icon" />
          </Link>
          <Link to="/portofolio" className="menu-col">
            <Image src={ChallengeIco} alt="challenge-icon" />
          </Link>
          <Link to="/club" className="menu-col">
            <Image src={FlagIco} alt="flag-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
