import { Image } from "react-bootstrap";
import PlusIconRed from "../../assets/svg/plusIconRed.svg";
import PlusIconRose from "../../assets/svg/plusIconRose.svg";

export default function CommunityConditionList({ isOthercolor, text }) {
  return (
    <li className="community-condition-items">
      <Image src={isOthercolor ? PlusIconRed : PlusIconRose} alt="icon-plus" />
      <p>{text}</p>
    </li>
  );
}
