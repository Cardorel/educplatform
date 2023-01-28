import React, { useState } from "react";
import { accessUser } from "../../assets/consts/data";
import ButtonBG from "../common/ButtonBG";

export default function AccessUser({ setAccessText }) {
  const [accessData, setAccessData] = useState(accessUser);
  const handleTabClick = (id) => {
    setAccessData((d) =>
      d.map((a) => {
        if (a.id === id) {
          setAccessText(a.text);
          return { ...a, isActive: true };
        } else {
          return { ...a, isActive: false };
        }
      })
    );
  };
  return (
    <div className="access-user">
      <p className="title">Хто має доступ:</p>
      <div className="access-user-btn">
        {accessData?.map((a) => (
          <ButtonBG key={a.id} handleClick={handleTabClick} {...a} />
        ))}
      </div>
    </div>
  );
}
