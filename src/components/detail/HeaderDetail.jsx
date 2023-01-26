import React from "react";
import { Image } from "react-bootstrap";
import BgImage from "../../assets/images/BG_detail.png";

import { HeaderDetailContent } from "./HeaderDetailContent";
import HeaderFeedback from "./HeaderFeedback";

export default function HeaderDetail(detailData) {
  return (
    <div className="detail-header-container">
      <div className="detail-header-image-content">
        <Image src={BgImage} alt="bg-image" className="detail-header-image" />
      </div>
      <HeaderDetailContent {...detailData} />
      <HeaderFeedback {...detailData} />
    </div>
  );
}
