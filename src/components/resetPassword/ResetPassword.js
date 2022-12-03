import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Image } from "react-bootstrap";
import Button from "../common/Button";
import InputText from "../common/InputText";
import ArrowBack from "../../assets/svg/arrowBack.svg";
import "./resetPassword.scss";
import Logo from "../logo/Logo";
import { isEmailValidation } from "../validation/validation";
import { authentification } from "../../firebase/config";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isResetEmailSended, setIsResetEmailSended] = useState(false);
  const [errorMessage, setIsErrorMessage] = useState("");
  const [sendPasswordResetEmail, error] =
    useSendPasswordResetEmail(authentification);

  const handleResetPassword = async () => {
    isEmailValidation(email) ? setIsEmailError(false) : setIsEmailError(true);
    if (isEmailValidation(email)) {
      try {
        const success = await sendPasswordResetEmail(email);
        success && setIsResetEmailSended(true);
        error &&
          !isResetEmailSended &&
          setIsErrorMessage(
            "Немає жодного запису користувача, який би відповідав цьому ідентифікатору"
          );
      } catch (er) {
        console.log(er.message);
      }
    }
  };

  return (
    <div className="reset-password">
      <div
        className={`feedback-message ${
          isResetEmailSended ? "success" : error ? "error" : ""
        }`}
      >
        {isResetEmailSended && (
          <p>The message has been sent. please check your mail!</p>
        )}

        {error && !isResetEmailSended && <p>{errorMessage}</p>}
      </div>
      <div className="logo-content">
        <Logo />
      </div>
      <div className="reset-password-content">
        <h4>Скинути пароль свого облікового запису</h4>
        <InputText
          color="#FF5600"
          placeholder="Ваша електронна пошта"
          type="text"
          value={email}
          errorText={isEmailError && "Адреса електронної пошти недійсна"}
          handleOnChange={(e) => setEmail(e.target.value)}
        />
        <Button
          handleClick={handleResetPassword}
          text="НАДІСЛАТИ ПОСИЛАННЯ ДЛЯ СКИДАННЯ ПАРОЛЮ"
          padding="23px 10px"
        />
        <Link to="/signin" className="link-reset">
          <Image src={ArrowBack} alt="arrow-back" />
          <span>Назад</span>
        </Link>
      </div>
    </div>
  );
}
