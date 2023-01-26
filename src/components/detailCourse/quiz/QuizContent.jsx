import React, { useEffect, useState } from "react";
import InputCheckBox from "../../common/InputCheckBox";

export default function QuizContent({
  question,
  resp1,
  resp2,
  resp3,
  answ,
  isResult,
  isClear,
  setIsClear,
}) {
  const [labelResp1, setLabelResp1] = useState(false);
  const [labelResp2, setLabelResp2] = useState(false);
  const [labelResp3, setLabelResp3] = useState(false);
  const [class1, setClass1] = useState("");
  const [class2, setClass2] = useState("");
  const [class3, setClass3] = useState("");

  useEffect(() => {
    if (isClear) {
      setLabelResp1(false);
      setLabelResp2(false);
      setLabelResp3(false);
      setClass1("");
      setClass2("");
      setClass3("");
    }
    return setIsClear(false);
  }, [isClear, setIsClear]);

  const handleChangeLabe1 = (e) => {
    const checked = e.target.checked;
    const { value } = e.target;
    if (value === answ && checked) {
      setClass1("success");
    } else if (value !== answ && checked) {
      setClass1("failed");
    } else {
      setClass1("");
    }
    setLabelResp1(checked);
    setLabelResp2(false);
    setLabelResp3(false);
  };
  const handleChangeLabe2 = (e) => {
    const checked = e.target.checked;
    const { value } = e.target;
    if (value === answ && checked) {
      setClass2("success");
    } else if (value !== answ && checked) {
      setClass2("failed");
    } else {
      setClass2("");
    }
    setLabelResp2(checked);
    setLabelResp1(false);
    setLabelResp3(false);
  };
  const handleChangeLabe3 = (e) => {
    const checked = e.target.checked;
    const { value } = e.target;
    if (value === answ && checked) {
      setClass3("success");
    } else if (value !== answ && checked) {
      setClass3("failed");
    } else {
      setClass3("");
    }
    setLabelResp3(checked);
    setLabelResp2(false);
    setLabelResp1(false);
  };
  return (
    <div className="quiz-content">
      <h4 className="quiz-title">{question}</h4>
      <div className="quiz-input">
        <InputCheckBox
          isChecked={labelResp1}
          value={resp1}
          labelText={resp1}
          handleChangeByChecking={handleChangeLabe1}
          classed={isResult ? class1 : ""}
        />
        <InputCheckBox
          isChecked={labelResp2}
          labelText={resp2}
          value={resp2}
          handleChangeByChecking={handleChangeLabe2}
          classed={isResult ? class2 : ""}
        />
        <InputCheckBox
          isChecked={labelResp3}
          labelText={resp3}
          value={resp3}
          handleChangeByChecking={handleChangeLabe3}
          classed={isResult ? class3 : ""}
        />
      </div>
    </div>
  );
}
