import React from "react";
import { Image } from "react-bootstrap";

import RegularIcon from "../../../assets/svg/student/regularIcon.svg";
import ChatIcon from "../../../assets/svg/student/chatIcon.svg";
import VideoIcon from "../../../assets/svg/student/videoIcon.svg";
import CalendarIcon from "../../../assets/svg/student/calendarIcon.svg";
import SearchIcon from "../../../assets/svg/student/searchIcon.svg";

import "./menu.scss";

export default function Menu() {
  return (
    <div className="menu-content">
      <div className="menu-row">
        <div className="menu-col profil-col">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
            alt="profil-image"
          />
        </div>
        <div className="menu-col">
          <Image src={RegularIcon} alt="regular-icon" />
        </div>
        <div className="menu-col">
          <Image src={SearchIcon} alt="search-icon" />
        </div>
        <div className="menu-col">
          <Image src={CalendarIcon} alt="calendar-icon" />
        </div>
        <div className="menu-col">
          <Image src={ChatIcon} alt="chat-icon" />
        </div>
        <div className="menu-col">
          <Image src={VideoIcon} alt="video-icon" />
        </div>
      </div>
    </div>
  );
}
