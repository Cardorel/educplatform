import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import JoinIcon from "../../assets/svg/joinUs.svg";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./header.scss";
import SearchIco from "../../assets/svg/searchIcon.svg";
import Language from "../../assets/svg/translateIcon.svg";
import SigninHeader from "./SigninHeader";
import { useSelector } from "react-redux";
import LogOut from "../../assets/svg/logout.svg";
import JoinHeader from "./JoinHeader";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const { user } = useSelector((state) => state?.user);
  const navigate = useNavigate();

  const handleCloseSearch = () => {
    setIsSearch((isclicked) => !isclicked);
  };

  const handleLogOutClick = () => navigate("/log-out");
  return (
    <div className={`header-container ${!user && "padding"}`}>
      <Link to="/">
        <Logo />
      </Link>
      <div className="header-right">
        <div className="search-content">
          <div className="searchBtn" onClick={handleCloseSearch}>
            <Image src={SearchIco} alt="search" />
          </div>
          {user === null && (
            <div className="languageBtn">
              <Image src={Language} alt="languageico" />
            </div>
          )}
        </div>
        {user && <SigninHeader />}
        <JoinHeader
          JoinIcon={JoinIcon}
          logIcon={LogOut}
          user={user}
          handleLogOut={handleLogOutClick}
        />
      </div>
      {isSearch ? <Search handleCloseSearch={handleCloseSearch} /> : null}
    </div>
  );
}
