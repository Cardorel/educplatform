import React from "react";
import { Image } from "react-bootstrap";
import Directory from "./Directory";
import BgImage from "../../assets/images/BG_detail.png";

import { HeaderDetailContent } from "./HeaderDetailContent";
import HeaderFeedback from "./HeaderFeedback";

export default function HeaderDetail() {
  return (
    <div className="detail-header-container">
      <Directory />
      <div className="detail-header-image-content">
        <Image src={BgImage} alt="bg-image" className="detail-header-image" />
      </div>
      <HeaderDetailContent />
      <HeaderFeedback />
    </div>
  );
}
