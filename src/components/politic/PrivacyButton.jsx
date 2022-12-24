import { Image } from "react-bootstrap";
import ArrowRight from "../../assets/svg/arrowLeft.svg";

export default function PrivacyButton({ text, handleNavigate }) {
  return (
    <button className="btn-privacy" onClick={handleNavigate}>
      {text}
      <Image src={ArrowRight} alt="arrow-right" />
    </button>
  );
}
