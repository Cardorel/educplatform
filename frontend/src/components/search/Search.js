import React from "react";
import { Image } from "react-bootstrap";
import CloseIcon from "../../assets/svg/search/closeIcon.svg";
import InputText from "../common/InputText";
import SearchLeftContent from "./SearchLeftContent";
import SearchRightContent from "./SearchRightContent";
import "./search.scss";
import SearchMiddleContent from "./SearchMiddleContent";
import SearchIcon from "../../assets/svg/search/searchIcon.svg";

export default function Search({handleCloseSearch}) {
  return (
    <div className="search-bar-container">
      <div className="search-bar-content">
        <p className="search-bar-paragraph">Що шукаєте?</p>
        <div className="search-bar-close" onClick={handleCloseSearch}>
          <Image src={CloseIcon} alt="close-icon" />
        </div>
        <div className="search-bar-input">
          <InputText
            color="#FF5600"
            type="text"
            placeholder="Почніть вводити свій запит, а ми Вам швидко допоможемо знайти)"
            imageUrl={SearchIcon}
          />
        </div>
        <div className="search-left-right">
          <div className="search-user-container">
            <SearchLeftContent />
            <SearchMiddleContent />
          </div>
          <SearchRightContent />
        </div>
      </div>
    </div>
  );
}
