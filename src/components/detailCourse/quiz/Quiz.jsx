import React from "react";
import Button from "../../common/Button";
import "./quiz.scss";
import QuizContent from "./QuizContent";

export default function Quiz({
  tests,
  indx,
  title,
  isResult,
  handleResult,
  isClear,
  setIsClear,
}) {
  return (
    <div className="quiz">
      <div className="quiz-text-content">
        <h4>
          Пройдіть тестування та оцініть свій результат проходження Курсу{" "}
          {indx + 1} “{title}”
        </h4>
        <p>
          Auctor nulla mus fusce pellentesque senectus leo dictum. Dictum
          viverra aliquam at neque feugiat a elit. Phasellus magna non ac
          rhoncus pellentesque senectus.
        </p>
      </div>
      <div className="quiz-container">
        {tests?.map((d) => (
          <QuizContent
            isClear={isClear}
            isResult={isResult}
            setIsClear={setIsClear}
            key={d.id}
            {...d}
          />
        ))}
      </div>
      {!isResult && (
        <div className="btn">
          <Button
            text="Перевірити тестування"
            padding="15px 50px"
            handleClick={handleResult}
          />
        </div>
      )}
    </div>
  );
}
