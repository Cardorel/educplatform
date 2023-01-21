import React from "react";
import { Image } from "react-bootstrap";
import Bookmark from "../../assets/svg/student/bookmark.svg";
import Like from "../../assets/svg/like.svg";

export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="btn-content">
        <p>Додати до закладок</p>
        <button>
          <Image src={Bookmark} alt="img" />
        </button>
      </div>
      <div className="btn-content">
        <p>Вподобати програму</p>
        <button>
          <Image src={Like} alt="like" />
        </button>
      </div>
    </div>
  );
}
