import React from "react";
import { Image } from "react-bootstrap";
import ContactIco from "../../assets/svg/menu/contact.svg";
import FileIco from "../../assets/svg/menuLeft/file.svg";
import ProgessIco from "../../assets/svg/menuLeft/progress.svg";
import SignetIco from "../../assets/svg/menuLeft/signet.svg";
import UserIco from "../../assets/svg/menuLeft/user.svg";
import VideoIco from "../../assets/svg/menuLeft/video.svg";
import CertificatIco from "../../assets/svg/menuLeft/certificat.svg";
import { NavLink } from "react-router-dom";

export default function MenuLeft() {
  return (
    <div className="menu-left">
      <NavLink
        to="my-course"
        className={({ isActive }) =>
          isActive
            ? "menu-left-col first-col active"
            : "menu-left-col first-col"
        }
      >
        <Image src={ContactIco} alt="contact-ico" />
        <h5>Курси</h5>
      </NavLink>
      <div className="menu-left-content">
        <NavLink
          to="/file"
          className={({ isActive }) =>
            isActive ? "menu-left-col active" : "menu-left-col"
          }
        >
          <Image src={FileIco} alt="file-ico" />
          <h5>Файли</h5>
        </NavLink>
        <NavLink
          to="/video"
          className={({ isActive }) =>
            isActive ? "menu-left-col active" : "menu-left-col"
          }
        >
          <Image src={VideoIco} alt="video-ico" />
          <h5>Відео</h5>
        </NavLink>
        <NavLink
          to="/certificat"
          className={({ isActive }) =>
            isActive ? "menu-left-col active" : "menu-left-col"
          }
        >
          <Image src={CertificatIco} alt="certificat-ico" />
          <h5>Сертифікати</h5>
        </NavLink>
        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive ? "menu-left-col active" : "menu-left-col"
          }
        >
          <Image src={ProgessIco} alt="progress-ico" />
          <h5>Прогрес</h5>
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            isActive ? "menu-left-col active" : "menu-left-col"
          }
        >
          <Image src={SignetIco} alt="signet-ico" />
          <h5>Закладки</h5>
        </NavLink>
      </div>
      <div className="menu-left-col">
        <Image src={UserIco} alt="user-ico" />
        <h5>Технічна підтримка</h5>
      </div>
    </div>
  );
}
