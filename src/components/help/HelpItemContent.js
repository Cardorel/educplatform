import { useState } from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import ArrowUp from "../../assets/svg/arrowUpWhite.svg";

export function HelpItemContent({ sub_title, isActive, description }) {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <li className="list-item">
      <div className="list-item-content" onClick={() => setIsClosed((d) => !d)}>
        <h3 className="title">{sub_title}</h3>
        <Image src={isClosed ? ArrowUp : ArrowDown} alt="arrow" />
      </div>
      {isClosed && <p className="text">{description}</p>}
    </li>
  );
}
