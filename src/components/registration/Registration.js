import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authentification, createUser } from "../../firebase/config";
import { MaskInput } from "../../maskPhone/maskPhone";
import Button from "../common/Button";
import InputCheckBox from "../common/InputCheckBox";
import InputText from "../common/InputText";
import JoinContainer from "../joinUs/JoinContainer";
import Logo from "../logo/Logo";
import {
  isEmailValidation,
  isNameValidation,
  isPasswordValidation,
} from "../validation/validation";
import "./registration.scss";

export default function Registration() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    userName: "",
    status: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isValidName, setIsValidName] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidStatus, setIsValidStatus] = useState(false);

  const { handleChangeNumber, number } = MaskInput();

  const checkAllFields = () => {
    const { email, name, password, status, userName } = registerData;
    isNameValidation(name) ? setIsValidName(false) : setIsValidName(true);

    isNameValidation(userName)
      ? setIsValidUsername(false)
      : setIsValidUsername(true);
    isNameValidation(status) ? setIsValidStatus(false) : setIsValidStatus(true);
    isPasswordValidation(password)
      ? setIsValidPassword(false)
      : setIsValidPassword(true);
    isEmailValidation(email) ? setIsValidEmail(false) : setIsValidEmail(true);
  };

  const IsAllInputsValid = () =>
    isNameValidation(registerData.name) &&
    isNameValidation(registerData.userName) &&
    isNameValidation(registerData.status) &&
    isPasswordValidation(registerData.password) &&
    registerData.password === registerData.confirmPassword &&
    isEmailValidation(registerData.email);

  const handleRegisterUser = async () => {
    checkAllFields();
    const { email, password, name, userName, status } = registerData;

    if (IsAllInputsValid()) {
      try {
        let { user } = await authentification.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUser(user, {
          name,
          displayName: userName,
          email,
          phone: number,
          status,
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/user.png?alt=media&token=449cf776-4685-41d3-b7ee-8d0c5dec2892",
        });
        navigate("/signin");
        setRegisterData(null);
      } catch (er) {
        console.log(er);
        alert(er);
      }
    }
  };
  return (
    <JoinContainer>
      <div className="registration-container">
        <h4 className="registration-text">
          Створіть Ваш новий обліковий запис
        </h4>
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
              <InputCheckBox labelText="Я - студент" value="студент" />
              <InputCheckBox labelText="Я - ментор" />
              <InputCheckBox labelText="Я - роботодавець" />
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
