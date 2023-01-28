import React, { useState } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { authentification, createUser } from "../../firebase/config";
import AccessUser from "./AccessUser";
import AddMaterial from "./add/AddMaterial";
import AddMentor from "./AddMentor";
import HeaderNewCourse from "./HeaderNewCourse";
import "./newCourse.scss";
import ParameterContainer from "./ParameterContainer";
import ParameterInput from "./ParameterInput";
import ParameterOneContent from "./ParameterOneContent";
import ParameterTwoContent from "./ParameterTwoContent";
import Setting from "./Setting";
import { uploadFile } from "../common/file";

export default function NewCourse() {
  const navigate = useNavigate();
  const [user] = useIdToken(authentification);
  const [textP1, setTextP1] = useState("");
  const [textP2, setTextP2] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const [textP3, setTextP3] = useState("");
  const [textP4, setTextP4] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const [textP5, setTextP5] = useState("");
  const [textP6, setTextP6] = useState("");

  const [textP7, setTextP7] = useState("");
  const [textP8, setTextP8] = useState("");

  const [textP9, setTextP9] = useState("");
  const [textP10, setTextP10] = useState("");
  const [textP11, setTextP11] = useState("");

  const [textP12, setTextP12] = useState("");
  const [textP13, setTextP13] = useState("");
  const [textP14, setTextP14] = useState("");
  const [textP15, setTextP15] = useState("");

  const [textP16, setTextP16] = useState("");
  const [textP17, setTextP17] = useState("");
  const [textP18, setTextP18] = useState("");
  const [textP19, setTextP19] = useState("");

  //add
  const [videoName, setVideoName] = useState("");
  const [fileName, setFileName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [textFileName, setTextFileName] = useState("");
  const [imageName, setImageName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [moduleDesc, setModuleDesc] = useState("");
  const [imgHeader, setImgHeader] = useState("");

  //setting
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  //header
  const [textName, setTextName] = useState("");
  const [userMentor, setUserMentor] = useState("");

  //mentor
  const [mentor, setMentor] = useState("");
  const [accessText, setAccessText] = useState("");

  const handleSubmitData = async () => {
    try {
      await createUser(user?.email, user, {
        header: {
          textName,
          userMentor,
          imgHeader,
        },
        mentor,
        accessText,
        program: {
          textP1,
          textP2,
          textP3,
          textP4,
          img1,
          img2,
        },
        step: {
          textP5,
          textP6,
          textP7,
          textP8,
          img3,
          img4,
        },
        learn: {
          textP9,
          textP10,
          textP11,
        },
        course: {
          textP12,
          textP13,
        },
        who: {
          textP14,
          textP15,
        },
        question: {
          textP16,
          textP17,
          textP18,
          textP19,
        },
        material: {
          moduleName,
          moduleDesc,
          fileName,
          videoName,
          imageName,
          linkName,
          textFileName,
        },
        setting: {
          category,
          language,
          color,
        },
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="new-course">
      <div className="new-course-container">
        <HeaderNewCourse
          textName={textName}
          userMentor={userMentor}
          imgHeader={imgHeader}
          handleFileOnChange={(e) =>
            uploadFile(e.target.files[0], setImgHeader)
          }
          handleTextNameOnChange={(e) => setTextName(e.target.value)}
          handleUserMentorOnChange={(e) => setUserMentor(e.target.value)}
        />
        <AddMentor
          mentor={mentor}
          handleMentorOnChange={(e) => setMentor(e.target.value)}
        />
        <AccessUser setAccessText={setAccessText} />
        <p className="access-text">
          Зверніть увагу, цей режим передбачений для створення курсів та
          тривалого допрацювання. Також на цей режим можна перемикнути, якщо
          потрібно, аби ніхто не мав доступу до наданої інформації, або потрібно
          аби на невизначений час припинити проведення саме цього курсу. Лише Ви
          зможете побачити вміст цього курсу.
        </p>
        <ParameterContainer titleProgram="Трошки про програму:">
          <ParameterInput
            textName={textP1}
            textDesc={textP2}
            handleImgOnChange={(e) => uploadFile(e.target.files[0], setImg1)}
            handleNameOnChange={(e) => setTextP1(e.target.value)}
            handleDescOnChange={(e) => setTextP2(e.target.value)}
            idx="01"
          />
          <ParameterInput
            textName={textP3}
            textDesc={textP4}
            handleImgOnChange={(e) => uploadFile(e.target.files[0], setImg2)}
            handleNameOnChange={(e) => setTextP3(e.target.value)}
            handleDescOnChange={(e) => setTextP4(e.target.value)}
            idx="02"
          />
        </ParameterContainer>
        <ParameterContainer titleProgram="Етапи навчання">
          <ParameterInput
            textName={textP5}
            textDesc={textP6}
            handleImgOnChange={(e) => uploadFile(e.target.files[0], setImg3)}
            handleNameOnChange={(e) => setTextP5(e.target.value)}
            handleDescOnChange={(e) => setTextP6(e.target.value)}
            idx="01"
          />
          <ParameterInput
            textName={textP7}
            textDesc={textP8}
            handleImgOnChange={(e) => uploadFile(e.target.files[0], setImg4)}
            handleNameOnChange={(e) => setTextP7(e.target.value)}
            handleDescOnChange={(e) => setTextP8(e.target.value)}
            idx="02"
          />
        </ParameterContainer>
        <ParameterContainer titleProgram="Як проходить навчання?">
          <ParameterOneContent
            textName={textP9}
            handleNameOnChange={(e) => setTextP9(e.target.value)}
            idx="01"
          />
          <ParameterOneContent
            textName={textP10}
            handleNameOnChange={(e) => setTextP10(e.target.value)}
            idx="02"
          />
          <ParameterOneContent
            textName={textP11}
            handleNameOnChange={(e) => setTextP11(e.target.value)}
            idx="03"
          />
        </ParameterContainer>
        <ParameterContainer titleProgram="Чому цей курс важливий?">
          <ParameterOneContent
            textName={textP12}
            handleNameOnChange={(e) => setTextP12(e.target.value)}
            idx="01"
          />
          <ParameterOneContent
            textName={textP13}
            handleNameOnChange={(e) => setTextP13(e.target.value)}
            idx="02"
          />
        </ParameterContainer>
        <ParameterContainer titleProgram="Для кого цей курс?">
          <ParameterOneContent
            textName={textP14}
            handleNameOnChange={(e) => setTextP14(e.target.value)}
            idx="01"
          />
          <ParameterOneContent
            textName={textP15}
            handleNameOnChange={(e) => setTextP15(e.target.value)}
            idx="02"
          />
        </ParameterContainer>
        <ParameterContainer titleProgram="Питання-відповідь">
          <ParameterTwoContent
            textName={textP16}
            textDesc={textP17}
            handleNameOnChange={(e) => setTextP16(e.target.value)}
            handleDescOnChange={(e) => setTextP17(e.target.value)}
            idx="01"
          />
          <ParameterTwoContent
            textName={textP18}
            textDesc={textP19}
            handleNameOnChange={(e) => setTextP18(e.target.value)}
            handleDescOnChange={(e) => setTextP19(e.target.value)}
            idx="02"
          />
        </ParameterContainer>
        <AddMaterial
          text1={moduleName}
          text2={moduleDesc}
          handleFileNameOnChange={(e) =>
            uploadFile(e.target.files[0], setFileName)
          }
          handleVideoNameOnChange={(e) =>
            uploadFile(e.target.files[0], setVideoName)
          }
          handleImageNameOnChange={(e) =>
            uploadFile(e.target.files[0], setImageName)
          }
          handleLinkNameOnChange={(e) =>
            uploadFile(e.target.files[0], setLinkName)
          }
          handleTextFileNameOnChange={(e) =>
            uploadFile(e.target.files[0], setTextFileName)
          }
          handleText1OnChange={(e) => setModuleName(e.target.value)}
          handleText2OnChange={(e) => setModuleDesc(e.target.value)}
        />
        <Setting
          category={category}
          language={language}
          handleCategoryOnChange={(e) => setCategory(e.target.value)}
          handleLanguageOnChange={(e) => setLanguage(e.target.value)}
          setColor={setColor}
        />
        <div className="btn-save">
          <button className="cancel" onClick={() => navigate(-1)}>
            Скасувати
          </button>
          <button className="save" onClick={handleSubmitData}>
            Зберегти
          </button>
        </div>
      </div>
    </div>
  );
}
