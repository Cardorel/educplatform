import React from "react";
import ProfilContent from "../Profil/ProfilContent";
import AccountParameter from "./AccountParameter";
import "./account.scss";

export default function Account() {
  return (
    <div className="account profil">
      <ProfilContent />
      <AccountParameter />
    </div>
  );
}
