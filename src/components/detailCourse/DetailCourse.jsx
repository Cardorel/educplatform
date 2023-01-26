import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./detailCourse.scss";
import HeaderCourseContainer from "./HeaderCourseContainer";
import Knowledge from "./Knowledge";
import Quiz from "./quiz/Quiz";
import TeacherAbout from "./TeacherAbout";
import VideoContent from "./VideoContent";

export default function DetailCourse() {
  const { data } = useSelector((state) => state?.course);
  const [index, setIndex] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const {
    kind,
    gender,
    detailContent: { severalCourse },
  } = data;
  const [videoInfo, setVideovideoInfo] = useState({
    ...severalCourse[0],
    indx: 0,
  });

  useEffect(() => {
    setVideovideoInfo({
      ...severalCourse[index],
      indx: index,
    });
  }, [index, severalCourse]);

  const handleEnded = () => {
    setIndex((i) => i + 1);
  };
  const handleCertificate = () => {};
  const handleClickVideo = (id, indx) => {
    setVideovideoInfo({
      ...severalCourse.find((c) => c.id === id),
      indx,
    });
    setIndex(indx);
    setIsClear(true);
    setIsResult(false);
  };

  const handleResult = () => {
    setIsResult(true);
  };

  return (
    <div>
      <HeaderCourseContainer
        interests={severalCourse}
        handleCertificate={handleCertificate}
        handleClickVideo={handleClickVideo}
        title={kind}
      >
        <div className="detail-course" style={{ width: "100%" }}>
          <h4 className="title">
            {kind && <span> {kind}:</span>} “{gender}”
          </h4>
          <VideoContent
            setIndex={setIndex}
            setIsClear={setIsClear}
            setIsResult={setIsResult}
            handleEnded={handleEnded}
            videoInfo={videoInfo}
          />
          <TeacherAbout {...data} />
          <Knowledge {...data} />
        </div>
      </HeaderCourseContainer>
      <Quiz
        isClear={isClear}
        setIsClear={setIsClear}
        isResult={isResult}
        {...videoInfo}
        handleResult={handleResult}
      />
    </div>
  );
}
