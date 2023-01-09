import React from "react";
import { accountData } from "../../assets/consts/data";
import AccountContent from "./AccountContent";

export default function AccountParameter() {
  return (
    <div className="account-parameter">
      <h4>Налаштування:</h4>
      <ul>
        {accountData?.map((data) => (
          <AccountContent key={data.id} {...data} />
        ))}
      </ul>
    </div>
  );
}
