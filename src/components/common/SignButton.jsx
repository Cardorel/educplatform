import React from "react";

export default function SignButton({ text, handleClick, ...rest }) {
  return (
    <button className="btn-join-common" onClick={handleClick} {...rest}>
      {text}
    </button>
  );
}
