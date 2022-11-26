import React from "react";
import InputContent from "../../common/InputContent";

export default function InputsRecommandation({
  title,
  firstText,
  secondText,
  thirdText,
  firstPlaceholder,
  secondPlacehold,
  thirdPlaceholder,
}) {
  return (
    <div className="recommandation-row">
      <h3 className="recommandation-title">{title}</h3>
      <div className="recommandation-col">
        <InputContent
          color="#FF5600"
          placeholder={firstPlaceholder}
          text={firstText}
        />
        <InputContent
          color="#FF5600"
          placeholder={secondPlacehold}
          text={secondText}
        />
        {thirdPlaceholder && <InputContent
          color="#FF5600"
          placeholder={thirdPlaceholder}
          text={thirdText}
        />}
      </div>
    </div>
  );
}
