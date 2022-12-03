import { useState } from "react";

export const MaskInput = () => {
  const [number, setNumber] = useState("");

  const handleChangeNumber = (event) => {
    let val = event.target.value;
    if (val.length <= 12) {
      val = val.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
      val = val.replace(/ /gm, "");
      let number = `${val.substring(0, 3)} ${val.substring(
        3,
        6
      )} ${val.substring(6, val.length)}`;
      setNumber(number.trim());
    } else {
      val = val.replace(/\D/g, "");
    }
  };
  return { number, handleChangeNumber, setNumber };
};
