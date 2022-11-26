import React from "react";
import { Image } from "react-bootstrap";
import { questions } from "../../assets/consts/data";
import PlusIconGreen from "../../assets/svg/plusIconGreen.svg";
import ArrowDownRose from "../../assets/svg/arrowDown.svg";

export default function FrequentlyQuestion() {
  return (
    <div className="frequently-question">
      <h3 className="frequently-question-title">Поширені питання</h3>
      <div className="frequently-question-row">
        {questions?.map(({ question, id }) => (
          <div className="frequently-question-col" key={id}>
            <div>
              <Image src={PlusIconGreen} alt="plus-green" />
              <p>{question}</p>
            </div>
            <Image src={ArrowDownRose} alt="arrow-down" />
          </div>
        ))}
      </div>
    </div>
  );
}
