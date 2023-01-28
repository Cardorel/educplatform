import React from "react";
import { Image } from "react-bootstrap";
import EditIco from "../../assets/svg/course/edit.svg";
import EditSmallIco from "../../assets/svg/course/editSmall.svg";
import ArrowDown from "../../assets/svg/course/arrowDown.svg";

export default function EditInputContent({ idx }) {
  return (
    <div className="edit-input">
      <div className="edit-row">
        <p className="number">{idx}</p>
      </div>
      <div className="edit-input-btn">
        <div className="edit-row-inputs">
          <input value="Якась назва частини програми" type="text" />
          <p className="text">
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
          </p>
        </div>
        <button className="btn-edit">
          <Image src={EditSmallIco} alt="edit-ico" />
        </button>
      </div>
      <div className="edit-row">
        <div className="upload">
          <div className="content-img">
            <Image src={EditIco} alt="cross-white" />
          </div>
          <p className="content-text">Змінити фото</p>
        </div>
      </div>
      <div className="edit-row-btn">
        <button className="btn-left">
          <Image src={ArrowDown} alt="arrow-down" />
        </button>
        <button>
          <Image src={ArrowDown} className="img-up" alt="arrow-down" />
        </button>
      </div>
    </div>
  );
}
