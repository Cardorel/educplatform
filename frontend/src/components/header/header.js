import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import JoinIcon from "../../assets/svg/joinUs.svg";
import Search from "../search/Search";
import "./header.scss";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  
  const handleCloseSearch = () => {
    setIsSearch((isclicked) => !isclicked);
  };
  return (
    <div className="header-container">
      <h1 className="logo-text">Логотип</h1>
      <div className="header-right">
        <div className="search-content">
          <div className="searchBtn" onClick={handleCloseSearch}>
            <img src="searchico.png" alt="search" />
          </div>
          <div className="languageBtn">
            <img src="languageico.png" alt="languageico" />
          </div>
        </div>
        <Link to='/sigin' className="authBtn">
          <span className="join-text">Join us</span>
          <Image src={JoinIcon} alt="JoinIcon" />
        </Link>
      </div>
      {isSearch ? <Search handleCloseSearch={handleCloseSearch} /> : null}
    </div>
  );
}
