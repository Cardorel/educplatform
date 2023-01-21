import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../assets/consts/data";
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
      <WhatNext data={products} title="Що вивчати далі" />
      <Skill
        firstText="Отримайте необхідні навички за допомогою понад 100 000 відеокурсів"
        secondText="Обирайте курси, які викладають реальні експерти"
        thirdText="Навчайтеся у своєму власному темпі з постійним доступом  на мобільному та  комп’ютері"
      />
      <Certificat />
      <Skill
        title="ПОКРАЩУЙТЕ СВОЇ ЗНАННЯ ТА ЗАБЕЗПЕЧУЙТЕ СВІЙ КАР’ЄРНИЙ РОЗВИТОК 
ЗА ДОПОМОГОЮ ДИСТАНЦІЙНИХ МОЖЛИВОСТЕЙ"
        firstText="Convallis suspendisse vel vel in pretium"
        secondText="Sed arcu ac in volutpat quis eget. Odio lorem ultricies dictumst ullamcorper."
        thirdText="Justo odio aliquet ut donec tempor suscipit"
      />
      <div className="course-student">
        <CourseStudent
          data={products.slice(0, 4)}
          title="Курси підвищення кваліфікації"
          handleMore={handleMore}
        />
        <CourseStudent
          data={products.slice(0, 4)}
          title="Короткі та корисні курси для Вас"
        />
      </div>
      <Mentor />
      <FormatLearning />
      <HomeContact />
    </div>
  );
}
