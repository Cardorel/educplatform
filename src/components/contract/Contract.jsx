import { useNavigate } from "react-router-dom";
import { contratData } from "../../assets/consts/data";
import PrivacyButton from "../politic/PrivacyButton";
import "./contract.scss";
import { ContractList } from "./ContractList";

export default function Contract() {
  const navigate = useNavigate();
  const handleNavigateToAboutUs = () => navigate("/about-us");
  const handleNavigateToContact = () => navigate("/contact");
  return (
    <div className="contract">
      <h2 className="contract-title">Договір публічної оферти</h2>
      <ol className="contract-list">
        {contratData?.map(({ id, title, data }) => (
          <ContractList key={id} title={title} data={data} />
        ))}
      </ol>
      <div className="contract-bank">
        <div className="contract-bank-user">
          <h4 className="contract-bank-title">ВИКОНАВЕЦЬ:</h4>
          <div className="contract-bank-content">
            <p className="text-color">ПЛАТФОРМА ЗАГАЛЬНОЇ ОСВІТИ</p>
            <p className="text-color">“УНІВЕРСАЛ КОРС ШЕРІНГ УКРАЇНА”</p>
          </div>
          <div className="contract-bank-content">
            <p>01030, Україна, м. Київ, вул. Нижній Вал, буд. 33</p>
            <p>IBAN UA000000000000000000000000000</p>
            <p>В АБ «УКРГАЗБАНК», МФО 000000</p>
            <p>Ідентифікаційний код юридичної особи 00000000</p>
          </div>
        </div>
        <div className="contract-bank-btns">
          <PrivacyButton
            handleNavigate={handleNavigateToAboutUs}
            text="Перейти до сторінки про нас"
          />
          <PrivacyButton
            handleNavigate={handleNavigateToContact}
            text="Перейти до сторінки контакти"
          />
        </div>
      </div>
    </div>
  );
}
