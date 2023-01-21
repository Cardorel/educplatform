import React from "react";
import { Image } from "react-bootstrap";
import BgImage from "../../assets/images/BG_detail.png";

import { HeaderDetailContent } from "./HeaderDetailContent";
import HeaderFeedback from "./HeaderFeedback";

export default function HeaderDetail({
  title,
  kind,
  gender,
  detailContent,
  description,
  price,
  startCourse,
  image,
  subTitles,
  voted,
  registred,
  rating,
  endCourse,
  timeByDay,
  language,
  profilLogoUrl,
}) {
  const { teachers } = detailContent;
  return (
    <div className="detail-header-container">
      <div className="detail-header-image-content">
        <Image src={BgImage} alt="bg-image" className="detail-header-image" />
      </div>
      <HeaderDetailContent
        description={description}
        teachers={teachers}
        price={price}
        startCourse={startCourse}
        title={title}
        image={image}
        profilLogoUrl={profilLogoUrl}
      />
      <HeaderFeedback
        voted={voted}
        subTitles={subTitles}
        registred={registred}
        rating={rating}
        startCourse={startCourse}
        endCourse={endCourse}
        timeByDay={timeByDay}
        language={language}
      />
    </div>
  );
}
