import { useState } from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import ArrowUp from "../../assets/svg/arrowUpWhite.svg";
import { ContractListItem } from "./ContractListItem";

export function ContractList({ title, data }) {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <li className="contract-list-item">
      <div
        className="contract-list-item-content"
        onClick={() => setIsClosed((d) => !d)}
      >
        <h3 className="title">{title}</h3>
        <Image src={isClosed ? ArrowUp : ArrowDown} alt="arrow" />
      </div>
      {isClosed &&
        data.map(({ id, sub_title, sub_data }) => (
          <ContractListItem
            key={id}
            sub_title={sub_title}
            sub_data={sub_data}
          />
        ))}
    </li>
  );
}
