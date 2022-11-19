import React from "react";

import ProgrammIcon from "../../assets/svg/search/programmIcon.svg";
import HistoryIcon from "../../assets/svg/search/historyIcon.svg";
import AdmminIcon from "../../assets/svg/search/adminIcon.svg";
import GeneralPhsyIcon from "../../assets/svg/search/generalphsycIcon.svg";
import MacroEconoIcon from "../../assets/svg/search/macroEconIcon.svg";
import ConcurentIcon from "../../assets/svg/search/concurrentIcon.svg";
import ImageContent from "./ImageContent";

export default function SearchMiddleContent() {
  return (
    <div className="search-middle-content">
      <h3>Спробуйте ці курси:</h3>
      <ImageContent
        imageUrl={ProgrammIcon}
        text="Процедурне програмування (на базі Сі/Сі++)"
      />
      <ImageContent imageUrl={HistoryIcon} text="Історія економічних вчень" />
      <ImageContent imageUrl={AdmminIcon} text="Адміністративний процес" />
      <ImageContent imageUrl={GeneralPhsyIcon} text="Основи психосоматики" />
      <ImageContent imageUrl={MacroEconoIcon} text="Макроекономіка" />
      <ImageContent
        imageUrl={ConcurentIcon}
        text="Конкурентоспроможність підприємств"
      />
    </div>
  );
}
