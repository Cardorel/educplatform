import { useNavigate } from "react-router-dom";
import "./politic.scss";
import PoliticHeader from "./PoliticHeader";
import PrivacyButton from "./PrivacyButton";
import PrivacyContent from "./PrivacyContent";
import PrivacyContenu from "./PrivacyContenu";
import PrivacySummer from "./PrivacySummer";

export default function Politic() {
  const navigate = useNavigate();
  const handleNavigateToCookie = () => {};
  const handleNavigatePolitic = () => navigate("/community");
  return (
    <div className="privacy">
      <PoliticHeader />
      <PrivacySummer />
      <PrivacyContenu />
      <PrivacyContent />
      <div className="privacy-btn-content">
        <PrivacyButton
          text="Перейти до сторінки політика використання файлів cookie"
          handleNavigate={handleNavigateToCookie}
        />
        <PrivacyButton
          text="Перейти до сторінки політика для спільноти"
          handleNavigate={handleNavigatePolitic}
        />
      </div>
    </div>
  );
}
