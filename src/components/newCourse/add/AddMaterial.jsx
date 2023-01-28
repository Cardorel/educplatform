import React from "react";
import InputText from "../../common/InputText";
import CrossIco from "../../../assets/svg/course/cross.svg";
import AddFileContent from "./AddFileContent";
import AddFileIco from "../../../assets/svg/course/addFile.svg";
import AddVideoIco from "../../../assets/svg/course/addVideo.svg";
import AddTextIco from "../../../assets/svg/course/addText.svg";
import AddImageIco from "../../../assets/svg/course/addImage.svg";
import AddLinkIco from "../../../assets/svg/course/addLink.svg";
import "./addMaterial.scss";

export default function AddMaterial({
  handleVideoNameOnChange,
  handleFileNameOnChange,
  handleLinkNameOnChange,
  handleTextFileNameOnChange,
  handleImageNameOnChange,
  text1,
  handleText1OnChange,
  text2,
  handleText2OnChange,
}) {
  return (
    <div className="add-material">
      <h4>Додайте матеріали курсу</h4>
      <div className="add-material-container">
        <div className="add-material-row">
          <InputText
            color="#EDEDED"
            placeholder="Розкажіть щось, надайте опис пункту"
            type="text"
            imageUrl={CrossIco}
            value={text1}
            handleOnChange={handleText1OnChange}
          />
          <InputText
            color="#EDEDED"
            placeholder="Розкажіть щось, надайте опис пункту"
            type="text"
            imageUrl={CrossIco}
            value={text2}
            handleOnChange={handleText2OnChange}
          />
        </div>
        <div className="add-material-content">
          <AddFileContent
            text="Завантажте відео"
            accept="video/*"
            img={AddVideoIco}
            handleChange={handleVideoNameOnChange}
          />
          <AddFileContent
            text="Завантажте файл"
            accept="image/*"
            img={AddFileIco}
            handleChange={handleFileNameOnChange}
          />
          <AddFileContent
            handleChange={handleTextFileNameOnChange}
            text="Зробіть тестування"
            img={AddTextIco}
            idx="2"
          />
          <AddFileContent
            handleChange={handleLinkNameOnChange}
            text="Додайте покликання"
            img={AddLinkIco}
            idx="3"
          />
          <AddFileContent
            handleChange={handleImageNameOnChange}
            text="Додайте зображення"
            img={AddImageIco}
            idx="4"
          />
        </div>
      </div>
    </div>
  );
}
