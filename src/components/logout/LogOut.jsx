import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { authentification } from "../../firebase/config";
import Button from "../common/Button";
import JoinContainer from "../joinUs/JoinContainer";
import "./logout.scss";

export default function LogOut() {
  const navigate = useNavigate();
  const [signOut] = useSignOut(authentification);
  const handleClickGoBack = () => navigate(-1);
  const handleClickLogout = async () => {
    const success = await signOut();
    if (success) {
      navigate("/");
    }
  };
  return (
    <JoinContainer>
      <div className="logout-content">
        <p>Ви впевнені, що хочете вийти з облікового запису?</p>
        <div className="btns">
          <Button
            text="ЗАЛИШИТИСЬ"
            padding="15px 100px"
            handleClick={handleClickGoBack}
          />
          <Button
            text="ТАК, ВИЙТИ"
            padding="15px 100px"
            handleClick={handleClickLogout}
          />
        </div>
      </div>
    </JoinContainer>
  );
}
