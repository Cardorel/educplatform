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
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "../../toolkit/reducers/authSlice";
import { getUserID } from "../../toolkit/reducers/getIDSlice";
import JoinContainer from "../joinUs/JoinContainer";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.currentData);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [savedSession, setSavedSession] = useState(true);

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  console.log(data);

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
        dispatch(getUserAsync(_delegate.uid));
        dispatch(getUserID(_delegate.uid));
        if (data && user) {
          navigate("/payment", { replace: true });
        } else {
          navigate("/student", { replace: true });
        }

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
    if (data && googleData) {
      navigate("/payment", { replace: true });
    } else {
      navigate("/student", { replace: true });
    }
  };
  return (
    <JoinContainer>
      <div className="sign-in">
        <div className="sign-in-content">
          <h4 className="sign-title">?????????????? ???????????????????????? ????????????:</h4>
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
                    ???????????? ???? ???????????????????? ????????????????
                  </span>{" "}
                  ???? ?????????????????? Google ????????????????
                </p>
              </div>
            </div>
            <div className="input-join-content">
              <InputText
                color="#FF5600"
                placeholder="???????? ???????????????????? ??????????"
                errorText={isEmailError && "???????????? ?????????????????????? ?????????? ????????????????"}
                type="email"
                handleOnChange={(e) =>
                  setUserData((data) => {
                    return { ...data, email: e.target.value };
                  })
                }
              />
              <InputText
                color="#FF5600"
                placeholder="????????????"
                errorText={
                  isPasswordError && "???????????? ?????? ?????????????? ???????????? 7 ????????????????"
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
                <span>??????????????????????? ????????</span>
              </label>
              <Button text="????????????" handleClick={handleSignIn} padding="23px" />
              <div className="reset-btn-content">
                <button
                  className="btn-reset-password"
                  onClick={() => navigate("/reset-password")}
                >
                  ???????????? ???????? ????????????
                </button>
              </div>
            </div>
          </div>
          <div className="help-join-content">
            <p>?? ???????? ?????????????? ????????????????! ????????????????????!</p>
            <Link to="/help">???????????? ??????????????????</Link>
          </div>
        </div>
      </div>
    </JoinContainer>
  );
}
