import { useState } from "react";
import { Image } from "react-bootstrap";
import { privacyData } from "../../assets/consts/data";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import ArrowUp from "../../assets/svg/arrowUpWhite.svg";

export default function PrivacyContent() {
  const [privacyDatas, setprivacyDatas] = useState(privacyData);
  const handleAccordion = (id) => {
    setprivacyDatas((d) =>
      d.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return privacyDatas.map(({ id, idText, data, title, isActive }) => (
    <div className="privacy-content" id={idText} key={id}>
      <div
        className="privacy-content-header"
        onClick={() => handleAccordion(id)}
      >
        <h4 className="privacy-content-header-title">{title}</h4>
        <Image src={isActive ? ArrowUp : ArrowDown} alt="arrow" />
      </div>
      {isActive && (
        <ul className="privacy-content-list">
          {data?.map(({ descr, id, sub_data, titleNum, title }) => (
            <li key={id} className="privacy-content-item">
              <p className="privacy-content-item-content">
                <span className="privacy-content-item-num">{titleNum}</span>
                <span className="privacy-content-item-title">{title}</span>
                <span className="privacy-content-item-descr">{descr}</span>
              </p>
              <ul>
                {sub_data?.map(({ descr, id, title, titleNum }) => (
                  <li key={id} className="privacy-content-item">
                    <p className="privacy-content-item-content">
                      <span className="privacy-content-item-num">
                        {titleNum}
                      </span>
                      <span className="privacy-content-item-title">
                        {title}
                      </span>
                      <span className="privacy-content-item-descr">
                        {descr}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
}
