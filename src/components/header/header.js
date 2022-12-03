import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import JoinIcon from "../../assets/svg/joinUs.svg";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./header.scss";
import SearchIco from "../../assets/svg/searchIcon.svg";
import Language from "../../assets/svg/translateIcon.svg";
import SigninHeader from "./SigninHeader";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);

  const handleCloseSearch = () => {
    setIsSearch((isclicked) => !isclicked);
  };
  return (
    <div className="header-container">
      <Logo />
      <div className="header-right">
        <div className="search-content">
          <div className="searchBtn" onClick={handleCloseSearch}>
            <Image src={SearchIco} alt="search" />
          </div>
          <div className="languageBtn">
            <Image src={Language} alt="languageico" />
          </div>
        </div>
        <SigninHeader />
        <Link to="/signin" className="authBtn">
          <span className="join-text">Join us</span>
          <Image src={JoinIcon} alt="JoinIcon" />
        </Link>
      </div>
      {isSearch ? <Search handleCloseSearch={handleCloseSearch} /> : null}
    </div>
  );
}
