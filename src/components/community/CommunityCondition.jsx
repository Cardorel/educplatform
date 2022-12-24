import React from "react";
import CommunityConditionList from "./CommunityConditionList";

export default function CommunityCondition({ conditions }) {
  return (
    <div className="community-condition">
      {conditions.map(({ id, title, reverse, data }) => (
        <div key={id} className={reverse ? "reverse" : "noreverse"}>
          <h4>{title}</h4>
          <ul className="community-condition-list">
            {data.map(({ text, isOthercolor, id }) => (
              <CommunityConditionList
                key={id}
                isOthercolor={isOthercolor}
                text={text}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
