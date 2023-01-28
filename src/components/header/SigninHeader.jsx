import { useState } from "react";
import { Image } from "react-bootstrap";
import ClocheIco from "../../assets/svg/cloche.svg";
import MessageIco from "../../assets/svg/messageIcon.svg";
import UserIco from "../../assets/svg/user.svg";
import USerBlackIco from "../../assets/svg/userBlack.svg";
import Dropdown from "./Dropdown";

export default function SigninHeader() {
  const [showed, setShowed] = useState(false);
  return (
    <div className="with-user-content">
      <div className="icon-content">
        <Image src={ClocheIco} alt="alarm-ico" />
      </div>
      <div className="icon-content">
        <Image src={MessageIco} alt="message-ico" />
        <div className="bar-message" />
      </div>
      <div className={`icon-content ${showed && "bar-user"}`}>
        <Image
          src={!showed ? UserIco : USerBlackIco}
          alt="user-ico"
          onClick={() => setShowed((s) => !s)}
        />
        {showed && <Dropdown setShowed={setShowed} />}
      </div>
    </div>
  );
}
