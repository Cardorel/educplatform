import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Button from "../common/Button";
import InputText from "../common/InputText";
import "./resetPassword.scss";
import { isEmailValidation } from "../validation/validation";
import { authentification } from "../../firebase/config";
import JoinContainer from "../joinUs/JoinContainer";

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
    <JoinContainer>
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
        <div className="reset-password-content">
          <h4>Скинути пароль свого облікового запису:</h4>
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
            padding="15px 20px"
          />
        </div>
      </div>
    </JoinContainer>
  );
}
