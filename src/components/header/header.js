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
import { useSignOut } from "react-firebase-hooks/auth";
import { authentification } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const { user } = useSelector((state) => state?.user);
  console.log(user);
  const [signOut] = useSignOut(authentification);
  const navigate = useNavigate();

  const handleCloseSearch = () => {
    setIsSearch((isclicked) => !isclicked);
  };

  const handleLogOutClick = async () => {
    const success = await signOut();
    if (success) {
      navigate("/");
    }
  };
  return (
    <div className="header-container">
      <Logo />
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
