import React from "react";

export default function ReverveLetter({ letters }) {
  return letters
    ?.split("")
    .map((letter, idx) => <span key={idx}>{letter}</span>);
}
