import { Image } from "react-bootstrap";
import ClocheIco from "../../assets/svg/cloche.svg";
import MessageIco from "../../assets/svg/messageIcon.svg";
import UserIco from "../../assets/svg/user.svg";

export default function SigninHeader() {
  return (
    <div className="with-user-content">
      <div className="icon-content">
        <Image src={ClocheIco} alt="alarm-ico" />
      </div>
      <div className="icon-content">
        <Image src={MessageIco} alt="message-ico" />
        <div className="bar-message" />
      </div>
      <div className="icon-content">
        <Image src={UserIco} alt="user-ico" />
      </div>
    </div>
  );
}
