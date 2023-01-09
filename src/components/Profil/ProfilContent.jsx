import React from "react";
import OtherCourse from "./OtherCourse";
import ProfilHeader from "./ProfilHeader";
import ProfilInfo from "./ProfilInfo";
import ProfilRating from "./ProfilRating";
import ProfilStatistic from "./ProfilStatistic";

export default function ProfilContent() {
  return (
    <div className="profil-right-container">
      <ProfilHeader />
      <ProfilInfo />
      <ProfilRating />
      <ProfilStatistic />
      <OtherCourse />
    </div>
  );
}
