import React from "react";

export default function SignButton({ text, ...rest }) {
  return (
    <button className="btn-join-common" {...rest}>
      {text}
    </button>
  );
}
