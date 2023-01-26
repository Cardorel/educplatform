import React from "react";
import { useNavigate } from "react-router-dom";
import { certificateData } from "../../assets/consts/data";
import HomeContact from "../contact/HomeContact";
import FormatLearning from "../formatLearning/FormatLearning";
import Certificat from "./certificat/Certificat";
import CourseStudent from "./courseStudent/CourseStudent";
import HeaderStudent from "./header/Header";
import Mentor from "./mentor/Mentor";
import Recommandation from "./recommandation/Recommandation";
import Skill from "./skill/Skill";
import "./student.scss";
import WhatNext from "./whatNext/WhatNext";

export default function Student() {
  const navigate = useNavigate();
  const handleMore = () => navigate("/all-courses");
  return (
    <div className="student">
      <HeaderStudent />
      <Recommandation />
      <WhatNext data={certificateData} title="Що вивчати далі" />
      <Certificat />
      <Skill
        title="ПОКРАЩУЙТЕ СВОЇ ЗНАННЯ ТА ЗАБЕЗПЕЧУЙТЕ СВІЙ КАР’ЄРНИЙ РОЗВИТОК 
ЗА ДОПОМОГОЮ ДИСТАНЦІЙНИХ МОЖЛИВОСТЕЙ"
        firstText="Convallis suspendisse vel vel in pretium"
        secondText="Sed arcu ac in volutpat quis eget. Odio lorem ultricies dictumst ullamcorper."
        thirdText="Justo odio aliquet ut donec tempor suscipit"
      />
      <div className="course-student">
        <div className="training-course">
          <CourseStudent
            data={certificateData
              .sort(() => 0.51245 - Math.random())
              .slice(0, 4)}
            title="Курси підвищення кваліфікації"
            handleMore={handleMore}
          />
        </div>
        <div className="userful-course">
          <CourseStudent
            data={certificateData
              .sort(() => 0.51245 - Math.random())
              .slice(0, 4)}
            title="Короткі та корисні курси для Вас"
          />
        </div>
      </div>
      <Mentor />
      <FormatLearning />
      <HomeContact />
    </div>
  );
}
