import React from "react";
import OtherCourse from "./OtherCourse";
import ProfilHeader from "./ProfilHeader";
import ProfilInfo from "./ProfilInfo";
import ProfilRating from "./ProfilRating";
import ProfilStatistic from "./ProfilStatistic";

export default function ProfilContent({ btnText, text }) {
  return (
    <div className="profil-right-container">
      <ProfilHeader btnText={btnText} />
      <ProfilInfo />
      <ProfilRating />
      <ProfilStatistic />
      <OtherCourse text={text} />
    </div>
  );
}
