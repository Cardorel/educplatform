import { useState } from "react";
import { Image } from "react-bootstrap";
import { privacyContenu } from "../../assets/consts/data";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";

export default function PrivacyContenu() {
  const [privacyContenuData, setPrivacyContentData] = useState(privacyContenu);

  const handleAccordion = (id) => {
    setPrivacyContentData((d) =>
      d.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  return (
    <>
      {privacyContenuData?.map(({ data, id, isActive, title }) => (
        <div className="privacy-contenu" key={id}>
          <div
            className="privacy-contenu-header"
            onClick={() => handleAccordion(id)}
          >
            <h4 className="privacy-contenu-title">{title}</h4>
            <Image src={ArrowDown} alt="arrow-down" />
          </div>
          {isActive && (
            <div className="list">
              {data?.map(({ id, textColor, textNum, text }) => (
                <p className="item-list">
                  {textNum && <span className="text-color">{textNum}</span>}
                  <span>
                    {textColor && (
                      <span className="text-color">{textColor}</span>
                    )}{" "}
                    <span>{text}</span>
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
