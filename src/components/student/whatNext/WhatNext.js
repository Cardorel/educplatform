import React from "react";
import WhatNextContent from "./WhatNextContent";
import "./whatNext.scss";

export default function WhatNext({ data, title }) {
  return (
    <div className="what-next-container">
      <h2 className="title-next">{title}</h2>
      <WhatNextContent data={data} text="Ваші однодумці переглядають" />
    </div>
  );
}
