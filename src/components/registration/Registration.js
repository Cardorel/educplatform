import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authentification } from "../../firebase/config";
import { MaskInput } from "../../maskPhone/maskPhone";
import { setUser } from "../../toolkit/reducers/setUserData";
import Button from "../common/Button";
import InputCheckBox from "../common/InputCheckBox";
import InputText from "../common/InputText";
import JoinContainer from "../joinUs/JoinContainer";
import {
  isEmailValidation,
  isNameValidation,
  isPasswordValidation,
} from "../validation/validation";
import "./registration.scss";

export default function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [isValidName, setIsValidName] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isWorker, setIsWorker] = useState(false);
  const [isMentor, setIsMentor] = useState(false);
  const [checkValues, setCheckValue] = useState({
    mentor: "",
    student: "",
    worker: "",
  });

  const { handleChangeNumber, number } = MaskInput();

  const checkAllFields = () => {
    const { email, name, password, userName } = registerData;
    isNameValidation(name) ? setIsValidName(false) : setIsValidName(true);

    isNameValidation(userName)
      ? setIsValidUsername(false)
      : setIsValidUsername(true);
    isPasswordValidation(password)
      ? setIsValidPassword(false)
      : setIsValidPassword(true);
    isEmailValidation(email) ? setIsValidEmail(false) : setIsValidEmail(true);
  };

  const IsAllInputsValid = () =>
    isNameValidation(registerData.name) &&
    isNameValidation(registerData.userName) &&
    isPasswordValidation(registerData.password) &&
    isEmailValidation(registerData.email);

  const handleRegisterUser = async () => {
    checkAllFields();
    const { email, password, name, userName } = registerData;

    if (IsAllInputsValid()) {
      try {
        let { user } = await authentification.createUserWithEmailAndPassword(
          email,
          password
        );
        dispatch(
          setUser({
            name,
            user,
            displayName: userName,
            email,
            phone: number,
            status: {
              ...checkValues,
            },
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/user.png?alt=media&token=449cf776-4685-41d3-b7ee-8d0c5dec2892",
          })
        );
        navigate("/complete-info");
      } catch (er) {
        console.log(er);
        alert(er);
      }
    }
  };

  const handleChangeMentor = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckValue((d) => ({ ...d, mentor: "ментор", student: "" }));
      setIsStudent(false);
      setIsMentor((m) => !m);
    } else {
      setCheckValue((d) => ({ ...d, mentor: null }));
      setIsMentor((m) => !m);
    }
  };

  const handleChangeStudent = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckValue((d) => ({ ...d, student: "студент", mentor: "" }));
      setIsMentor(false);
      setIsStudent((s) => !s);
    } else {
      setCheckValue((d) => ({ ...d, student: "" }));
      setIsStudent((s) => !s);
    }
  };

  const handleChangeWorker = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckValue((d) => ({ ...d, worker: "роботодавець" }));
      setIsWorker((w) => !w);
    } else {
      setCheckValue((d) => ({ ...d, worker: "" }));
      setIsWorker((w) => !w);
    }
  };
  return (
    <JoinContainer>
      <div className="registration-container">
        <h4 className="title">Створіть Ваш новий обліковий запис</h4>
        <p className="text">
          і отримайте сповіщення, щойно наш запит буде опрацьовано
        </p>
        <div className="register-row">
          <div className="registration-input-content">
            <InputText
              color="#FF5600"
              errorText={isValidName && "ім‘я має містити більше 5 символів"}
              placeholder="Ваше повне ім‘я"
              type="text"
              value={registerData.name}
              handleOnChange={(e) =>
                setRegisterData((d) => ({ ...d, name: e.target.value }))
              }
            />
            <InputText
              value={registerData.userName}
              errorText={
                isValidUsername && "ім‘я має містити більше 5 символів"
              }
              color="#FF5600"
              placeholder="Ім‘я користувача"
              type="text"
              handleOnChange={(e) =>
                setRegisterData((d) => ({ ...d, userName: e.target.value }))
              }
            />
            <InputText
              value={number}
              handleOnChange={handleChangeNumber}
              color="#FF5600"
              placeholder="Номер телефону"
              type="text"
            />
            <InputText
              value={registerData.email}
              handleOnChange={(e) =>
                setRegisterData((d) => ({ ...d, email: e.target.value }))
              }
              color="#FF5600"
              placeholder="Електронна пошта"
              type="email"
              errorText={isValidEmail && "Адреса електронної пошти недійсна"}
            />
          </div>
          <div className="register-col">
            <h4>Визначте Ваш статус:</h4>
            <div className="register-checkbox">
              <InputCheckBox
                isChecked={isStudent}
                labelText="Я - студент"
                value={checkValues?.student}
                handleChangeByChecking={handleChangeStudent}
              />
              <InputCheckBox
                isChecked={isMentor}
                labelText="Я - ментор"
                value={checkValues?.mentor}
                handleChangeByChecking={handleChangeMentor}
              />
              <InputCheckBox
                isChecked={isWorker}
                labelText="Я - роботодавець"
                value={checkValues?.worker}
                handleChangeByChecking={handleChangeWorker}
              />
            </div>
            <InputText
              value={registerData.password}
              handleOnChange={(e) =>
                setRegisterData((d) => ({ ...d, password: e.target.value }))
              }
              color="#FF5600"
              placeholder="Пароль"
              type="password"
              errorText={
                isValidPassword && "Пароль має містити більше 7 символів"
              }
            />
          </div>
        </div>
        <div className="register-btn-content">
          <Button
            handleClick={handleRegisterUser}
            text="ЗАРЕЄСТРУВАТИСЯ"
            padding="15px 200px"
          />
        </div>
        <div className="registration-footer">
          <p className="registration-privacy">
            Натискаючи цю кнопку, ви погоджуєтеся з{" "}
            <a href="/#" className="registration-link">
              положеннями і умовами
            </a>{" "}
            та{" "}
            <a href="/#" className="registration-link">
              політикою конфіденційності
            </a>
            .
          </p>
          <p className="registration-autho">
            Уже маєте обліковий запис ...?{" "}
            <Link to="/signin" className="registration-link">
              авторизуйтеся
            </Link>
          </p>
        </div>
      </div>
    </JoinContainer>
  );
}
