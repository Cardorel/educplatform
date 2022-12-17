import React from "react";
import HeaderDetail from "./HeaderDetail";
import "./detail.scss";
import AboutCertificate from "./AboutCertificate";
import Skills from "./Skills";
import { certificateData, products } from "../../assets/consts/data";
import AboutProfessionCertificat from "./AboutProfessionCertificat";
import TeacherDetail from "./TeacherDetail";
import SeveralCourse from "./SeveralCourse";
import Certificate from "./Certificate";
import ProgrammTeacher from "./ProgrammTeacher";
import WhatNextContent from "../student/whatNext/WhatNextContent";
import { useParams } from "react-router-dom";
import { ModalApp } from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../../toolkit/reducers/getVideoSlice";

export default function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const detailData = certificateData?.find((d) => d?.id === +params?.id);
  const currentVideo = useSelector((state) => state?.video?.video);
  const handleCloseModal = () => dispatch(getVideo(null));

  const {
    logoUrl,
    abreviationSchool,
    profilLogoUrl,
    detailContent: {
      certificates,
      whatLearns,
      like,
      register,
      users,
      advs,
      teachers,
      severalCourse,
    },
  } = detailData;

  return (
    <div>
      <HeaderDetail {...detailData} />
      <AboutCertificate
        abreviationSchool={abreviationSchool}
        profilLogoUrl={profilLogoUrl}
      />
      <Skills />
      <AboutProfessionCertificat
        certificates={certificates}
        infos={whatLearns}
      />
      <TeacherDetail like={like} register={register} users={users} />
      <SeveralCourse severalCourse={severalCourse} />
      <Certificate advs={advs} logoUrl={logoUrl} />
      <ProgrammTeacher teachers={teachers} />
      <div className="similary-product what-next-container ">
        <WhatNextContent data={products} text="Інші схожі програми і курси" />
      </div>
      {currentVideo && (
        <ModalApp
          handleCloseModal={handleCloseModal}
          currentVideo={currentVideo}
        />
      )}
    </div>
  );
}
