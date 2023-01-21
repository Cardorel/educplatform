import { Image } from "react-bootstrap";
import Finance from "../../assets/svg/interest/finance.svg";
import Technology from "../../assets/svg/interest/it.svg";
import Add from "../../assets/svg/interest/add.svg";
import Right from "../../assets/svg/interest/right.svg";
import Science from "../../assets/svg/interest/science.svg";
import CrossWhite from "../../assets/svg/crossWhite.svg";
import GoTo from "../../assets/svg/interest/goTo.svg";

export default function Interest({ text, src, color, isTrue }) {
  const img = { Finance, Technology, Right, Science, Add };
  return (
    <div className="col">
      <div className="col-right">
        <Image src={img[src]} alt="img-user" />
        <div className="text-content">
          <p className="name">{text}</p>
        </div>
      </div>
      <div className="col-left" style={{ backgroundColor: color }}>
        <Image src={isTrue ? GoTo : CrossWhite} alt="message" />
      </div>
    </div>
  );
}
