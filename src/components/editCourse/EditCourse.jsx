import React, { useState } from "react";
import AccessUser from "../newCourse/AccessUser";
import Setting from "../newCourse/Setting";
import EditContainer from "./EditContainer";
import "./editCourse.scss";
import EditInputContent from "./EditInputContent";
import EditInputOneContent from "./EditInputOneContent";
import EditInputTwoContent from "./EditInputTwoContent";
import HeaderEditCourse from "./HeaderEditCourse";

export default function EditCourse() {
  const [, setAccessText] = useState("");
  return (
    <div className="edit">
      <div className="edit-container">
        <HeaderEditCourse />
        <AccessUser setAccessText={setAccessText} />
        <EditContainer text="Трошки про програму:">
          <EditInputContent idx="01" />
          <EditInputContent idx="02" />
        </EditContainer>
        <EditContainer text="Етапи навчання">
          <EditInputContent idx="01" />
          <EditInputContent idx="02" />
        </EditContainer>
        <EditContainer text="Як проходить навчання?">
          <EditInputOneContent idx="01" />
          <EditInputOneContent idx="02" />
          <EditInputOneContent idx="03" />
        </EditContainer>
        <EditContainer text="Чому цей курс важливий?">
          <EditInputOneContent idx="01" />
          <EditInputOneContent idx="02" />
        </EditContainer>
        <EditContainer text="Для кого цей курс?">
          <EditInputOneContent idx="01" />
          <EditInputOneContent idx="02" />
        </EditContainer>
        <EditContainer text="Питання-відповідь">
          <EditInputTwoContent idx="01" />
          <EditInputTwoContent idx="02" />
        </EditContainer>
        <Setting />
      </div>
    </div>
  );
}
