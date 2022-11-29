import React from "react";
import HeaderDetail from "./HeaderDetail";
import "./detail.scss";
import AboutCertificate from "./AboutCertificate";
import Skills from "./Skills";
import { products, professionContent } from "../../assets/consts/data";
import AboutProfessionCertificat from "./AboutProfessionCertificat";
import TeacherDetail from "./TeacherDetail";
import SeveralCourse from "./SeveralCourse";
import Certificate from "./Certificate";
import ProgrammTeacher from "./ProgrammTeacher";
import WhatNextContent from "../student/whatNext/WhatNextContent";

export default function Detail() {
  const {
    certificates,
    whatLearns,
    like,
    register,
    users,
    advs,
    logoUrl,
    teachers,
  } = professionContent;
  return (
    <div>
      <HeaderDetail />
      <AboutCertificate />
      <Skills />
      <AboutProfessionCertificat
        certificates={certificates}
        infos={whatLearns}
      />
      <TeacherDetail like={like} register={register} users={users} />
      <SeveralCourse />
      <Certificate advs={advs} logoUrl={logoUrl} />
      <ProgrammTeacher teachers={teachers} />
      <div className="similary-product what-next-container ">
        <WhatNextContent data={products} text="Інші схожі програми і курси" />
      </div>
    </div>
  );
}
