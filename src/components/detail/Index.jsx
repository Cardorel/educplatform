import React from "react";
import HeaderDetail from "./HeaderDetail";
import "./detail.scss";
import AboutCertificate from "./AboutCertificate";
import Skills from "./Skills";
import { professionContent } from "../../assets/consts/data";
import AboutProfessionCertificat from "./AboutProfessionCertificat";
import TeacherDetail from "./TeacherDetail";

export default function Detail() {
  const { certificates, whatLearns, like, register, teachers } =
    professionContent;
  return (
    <div>
      <HeaderDetail />
      <AboutCertificate />
      <Skills />
      <AboutProfessionCertificat
        certificates={certificates}
        infos={whatLearns}
      />
      <TeacherDetail like={like} register={register} teachers={teachers} />
    </div>
  );
}
