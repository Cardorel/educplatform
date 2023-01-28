import React, { useState } from "react";
import ParameterContent from "./ParameterContent";

export default function ParameterContainer({ titleProgram, children }) {
  const [isClosed, setIsClosed] = useState(false);
  const handletoggleClick = () => setIsClosed((d) => !d);
  return (
    <div className="parameter">
      <ParameterContent
        handleClick={handletoggleClick}
        titleProgram={titleProgram}
      />
      {isClosed && children}
    </div>
  );
}
