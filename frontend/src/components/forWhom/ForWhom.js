import React from "react";
import { forWhomData } from "../../assets/consts/data";
import "./forWhom.scss";
import ForWhomContent from "./ForWhomContent";
import EmployeeImage from "../../assets/svg/employee.svg";
import RecipientImage from "../../assets/svg/recipient.svg";
import EducationImage from "../../assets/svg/education.svg";
import PlusIconRed from "../../assets/svg/plusIconRed.svg";
import PlusIconRose from "../../assets/svg/plusIconRose.svg";
import PlusIcon from "../../assets/svg/plusIcon.svg";

export default function ForWhom() {
  const { educationals, employers, recipients } = forWhomData;
  return (
    <div className="for-whom">
      <ForWhomContent
        lists={recipients}
        title="Користувачі - отримувачі знань"
        color="#8E1010"
        iconUrl={PlusIconRed}
        image={RecipientImage}
      />
      <div className="for-whom-middle">
        <h1 className="for-whom-title">Для кого *назва*?</h1>
        <ForWhomContent
          lists={educationals}
          title="Освітні компанії, викладачі"
          color="#10788E"
          iconUrl={PlusIcon}
          image={EducationImage}
        />
      </div>
      <ForWhomContent
        lists={employers}
        title="Роботодавці"
        color="#FF5600"
        iconUrl={PlusIconRose}
        image={EmployeeImage}
      />
    </div>
  );
}
