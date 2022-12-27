import React from "react";
import { useNavigate } from "react-router-dom";
import { cookieData } from "../../assets/consts/data";
import { ContractList } from "../contract/ContractList";
import PrivacyButton from "../politic/PrivacyButton";
import "./cookie.scss";

export default function Cookie() {
  const navigate = useNavigate();
  const handleNavigateToPolitic = () => navigate("/politic");
  const handleNavigateToContract = () => navigate("/contract");
  return (
    <div className="contract cookie">
      <h2 className="contract-title">Політика використання файлів cookie</h2>
      <ol className="contract-list">
        {cookieData?.map(({ id, title, data }) => (
          <ContractList key={id} title={title} data={data} />
        ))}
      </ol>
      <div className="cookie-btns">
        <PrivacyButton
          handleNavigate={handleNavigateToPolitic}
          text="Перейти до сторінки політика конфідеційності"
        />
        <PrivacyButton
          handleNavigate={handleNavigateToContract}
          text="Перейти до сторінки політика для спільноти"
        />
      </div>
    </div>
  );
}
