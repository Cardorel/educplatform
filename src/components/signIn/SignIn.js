import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import Google from "../../assets/svg/google.svg";
import "./signIn.scss";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authentification, LogInWithGoogle } from "../../firebase/config";
import {
  isEmailValidation,
  isPasswordValidation,
} from "../validation/validation";
import { useDispatch } from "react-redux";
import { getUserID } from "../../toolkit/reducers/getIDSlice";
import JoinContainer from "../joinUs/JoinContainer";
import { getDataAsync } from "../../toolkit/reducers/getusersCollection";
import { fetchSignInMethodsForEmail } from "firebase/auth";

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

    if (!isEmailError && !isPasswordError) {
      try {
        const user = await authentification.signInWithEmailAndPassword(
          email,
          password
        );
        const {
          user: { _delegate },
        } = user;
        savedSession && localStorage.setItem("userId", _delegate.uid);
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
    dispatch(getDataAsync(_delegate.uid));

    fetchSignInMethodsForEmail(authentification, _delegate.email).then(
      (result) => {
        if (result?.length === 0) {
          navigate("/complete-info", { replace: true });
        } else {
          navigate("/student", { replace: true });
        }
      }
    );
  };
  return (
    <JoinContainer>
      <div className="sign-in">
        <div className="sign-in-content">
          <h4 className="sign-title">Оберіть найзручніший спосіб:</h4>
          <div className="sign-in-left">
            <div className="sign-header">
              <div
                className="google-content"
                role="button"
                onClick={handleLogInWithGoogle}
              >
                <Image src={Google} alt="google" />
                <p>
                  <span className="google-text">
                    Увійти до особистого кабінету
                  </span>{" "}
                  за допомогою Google аккаунту
                </p>
              </div>
            </div>
            <div className="input-join-content">
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
          </div>
          <div className="help-join-content">
            <p>У мене виникли проблеми! Допоможіть!</p>
            <Link to="/help">Служба підтримки</Link>
          </div>
        </div>
      </div>
    </JoinContainer>
  );
}
