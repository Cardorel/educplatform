import React from "react";
import { useFetchAsyncDocumentById } from "../../toolkit/fetchCollection/fetchCollectionById";
import OtherCourse from "./OtherCourse";
import ProfilHeader from "./ProfilHeader";
import ProfilInfo from "./ProfilInfo";
import ProfilRating from "./ProfilRating";
import ProfilStatistic from "./ProfilStatistic";

export default function ProfilContent({ btnText, text }) {
  const data = useFetchAsyncDocumentById("users");
  const { displayName, info, status, email, imageUrl } = data;
  return (
    <div className="profil-right-container">
      <ProfilHeader
        btnText={btnText}
        displayName={displayName}
        name={info?.name}
        imageUrl={imageUrl}
      />
      <ProfilInfo
        day={info?.day}
        year={info?.year}
        month={info?.month}
        phone={info?.phone}
        status={status}
        email={email}
      />
      <ProfilRating />
      <ProfilStatistic />
      <OtherCourse text={text} />
    </div>
  );
}
