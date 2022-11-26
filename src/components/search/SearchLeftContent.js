import React from "react";
import SearchContent from "./SearchContent";
import ITICon from "../../assets/svg/search/itIcon.svg";
import FinanceICon from "../../assets/svg/search/financeIcon.svg";
import LawICon from "../../assets/svg/search/lawIcon.svg";
import PhsycologyICon from "../../assets/svg/search/phsycologyIcon.svg";
import BusnessICon from "../../assets/svg/search/busnessIcon.svg";
import ManagementICon from "../../assets/svg/search/managementIcon.svg";

import ArrowBlue from "../../assets/svg/search/arrowBlue.svg";
import ArrowOrange from "../../assets/svg/search/arrowBlue.svg";
import ArrowRose from "../../assets/svg/search/arrowRose.svg";

export default function SearchLeftContent() {
  return (
    <div className="search-left-content">
      <h3>Знайдіть свою омріяну професію:</h3>
      <SearchContent
        imageUrl={ITICon}
        arrowUrl={ArrowOrange}
        text="IT технології"
      />
      <SearchContent
        imageUrl={FinanceICon}
        arrowUrl={ArrowBlue}
        text="Фінанси"
      />
      <SearchContent imageUrl={LawICon} arrowUrl={ArrowRose} text="Право" />
      <SearchContent
        imageUrl={PhsycologyICon}
        arrowUrl={ArrowOrange}
        text="Психологія"
      />
      <SearchContent
        imageUrl={BusnessICon}
        arrowUrl={ArrowBlue}
        text="Бізнес"
      />
      <SearchContent
        imageUrl={ManagementICon}
        arrowUrl={ArrowBlue}
        text="Менеджмент"
      />
    </div>
  );
}
