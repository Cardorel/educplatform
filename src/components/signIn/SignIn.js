import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import ArrowBlack from "../../assets/svg/arrowBlack.svg";
import Google from "../../assets/svg/google.svg";
import "./signIn.scss";
import Logo from "../logo/Logo";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authentification, LogInWithGoogle } from "../../firebase/config";
import {
  isEmailValidation,
  isPasswordValidation,
} from "../validation/validation";
import { useDispatch } from "react-redux";
import { getUserAsync } from "../../toolkit/reducers/authSlice";
import { getUserID } from "../../toolkit/reducers/getIDSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [savedSession, setSavedSession] = useState(true);

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleSignIn = async () => {
    const { email, password } = userData;
    isEmailValidation(email) ? setIsEmailError(false) : setIsEmailError(true);
    isPasswordValidation(password)
      ? setIsPasswordError(false)
      : setIsPasswordError(true);

    if (!isEmailError && isPasswordError) {
      try {
        const user = await authentification.signInWithEmailAndPassword(
          email,
          password
        );
        const {
          user: { _delegate },
        } = user;
        savedSession && localStorage.setItem("userId", _delegate.uid);
        dispatch(getUserAsync(_delegate.uid));
        dispatch(getUserID(_delegate.uid));
        navigate("/student", { replace: true });
        setUserData({
          email: "",
          password: "",
        });
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleLogInWithGoogle = async () => {
    const googleData = await LogInWithGoogle();
    const { _delegate } = googleData?.user;
    dispatch(getUserAsync(_delegate.uid));
    navigate("/student", { replace: true });
  };
  return (
    <div className="sign-in">
      <div className="logo-content">
        <Logo />
      </div>
      <div className="sign-in-content">
        <div className="sign-in-left">
          <div className="sign-header">
            <h4 className="sign-title">Увійти до особистого кабінету</h4>
            <div
              className="google-content"
              role="button"
              onClick={handleLogInWithGoogle}
            >
              <Image src={Google} alt="google" />
              <span>УВІЙТИ З GOOGLE</span>
            </div>
            <div className="separator-bar">
              <p className="separator-text">або</p>
            </div>
          </div>
          <InputText
            color="#FF5600"
            placeholder="Ваша електронна пошта"
            errorText={isEmailError && "Адреса електронної пошти недійсна"}
            type="email"
            handleOnChange={(e) =>
              setUserData((data) => {
                return { ...data, email: e.target.value };
              })
            }
          />
          <InputText
            color="#FF5600"
            placeholder="Пароль"
            errorText={
              isPasswordError && "Пароль має містити більше 7 символів"
            }
            type="password"
            handleOnChange={(e) =>
              setUserData((data) => {
                return { ...data, password: e.target.value };
              })
            }
          />
          <label className="label-input">
            <input
              type="checkbox"
              checked={savedSession}
              value={savedSession}
              onChange={(e) => setSavedSession(e.target.checked)}
            />
            <span>Запам’ятати мене</span>
          </label>
          <Button text="УВІЙТИ" handleClick={handleSignIn} padding="23px" />
          <div className="reset-btn-content">
            <button
              className="btn-reset-password"
              onClick={() => navigate("/reset-password")}
            >
              Забули свій пароль
            </button>
          </div>
        </div>
        <div className="sign-in-right">
          <h4>... зареєструйтеся БЕЗКОШТОВНО</h4>
          <p className="sign-in-right-para">
            Створіть власний навчальний онлайн-план, отримайте підвищення
            кваліфікації, створюйте та монетизуйте свої онлайн-курси, підписку
            за допомогою ...
          </p>
          <Button
            text="ЗАРЕЄСТРУВАТИСЯ СЬОГОДНІ"
            padding="23px"
            imageUrl={ArrowBlack}
            handleClick={() => navigate("/register")}
          />
        </div>
      </div>
    </div>
  );
}
