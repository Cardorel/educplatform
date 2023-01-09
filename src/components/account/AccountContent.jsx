import React from "react";
import AccountItem from "./AccountItem";

export default function AccountContent({ title, data }) {
  return (
    <li>
      <p className="title">{title}</p>
      <ul className="account-item">
        {data?.map((item) => (
          <AccountItem key={item?.id} {...item} />
        ))}
      </ul>
    </li>
  );
}
