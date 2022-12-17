import React from "react";
import { products } from "../../assets/consts/data";
import HomeContact from "../contact/HomeContact";
import FormatLearning from "../formatLearning/FormatLearning";
import Certificat from "./certificat/Certificat";
import HeaderStudent from "./header/Header";
import Recommandation from "./recommandation/Recommandation";
import Skill from "./skill/Skill";
import "./student.scss";
import WhatNext from "./whatNext/WhatNext";
import WhatNextContent from "./whatNext/WhatNextContent";

export default function Student() {
  return (
    <div className="student">
      <HeaderStudent />
      <Recommandation />
      <WhatNext data={products} />
      <Skill
        firstText="Отримайте необхідні навички за допомогою понад 100 000 відеокурсів"
        secondText="Обирайте курси, які викладають реальні експерти"
        thirdText="Навчайтеся у своєму власному темпі з постійним доступом  на мобільному та  комп’ютері"
      />
      <div className="what-next-container what-next-flex">
        <WhatNextContent
          data={products}
          text="Короткі та корисні курси для Вас"
        />
        <WhatNextContent
          data={products}
          text="Короткі та корисні курси для Вас"
        />
      </div>
      <Certificat />
      <Skill
        title="ПОКРАЩУЙТЕ СВОЇ ЗНАННЯ ТА ЗАБЕЗПЕЧУЙТЕ СВІЙ КАР’ЄРНИЙ РОЗВИТОК 
ЗА ДОПОМОГОЮ ДИСТАНЦІЙНИХ МОЖЛИВОСТЕЙ"
        firstText="Convallis suspendisse vel vel in pretium"
        secondText="Sed arcu ac in volutpat quis eget. Odio lorem ultricies dictumst ullamcorper."
        thirdText="Justo odio aliquet ut donec tempor suscipit"
      />
      <FormatLearning />
      <HomeContact />
    </div>
  );
}
