import React from "react";
import { Image } from "react-bootstrap";
import SpeedEditIco from "../../assets/svg/profil/speededit.svg";
import SpeedUsed from "../../assets/svg/profil/speedUsed.svg";
import Raiting from "../student/whatNext/Raiting";
import InputRange from "../../assets/svg/profil/inputRange.svg";

export default function ProfilStatisticRight() {
  return (
    <div className="statistic-right">
      <div className="statistic-right-header">
        <p>
          <span className="text">Старт:</span>
          <span className="months">6 жовтня</span>
        </p>
        <p>
          <span className="text">Фініш:</span>
          <span className="months">12 січня</span>
        </p>
      </div>
      <div className="statistic-right-range">
        <Image src={InputRange} alt="img-range" />
      </div>
      <div className="statistic-right-content">
        <div>
          <Image src={SpeedUsed} alt="speed-ico" />
          <p>Швидкість реагування</p>
        </div>
        <div>
          <Image src={SpeedEditIco} alt="speed-ico" />
          <p>Швидкість виконання роботи:</p>
        </div>
      </div>
      <div className="statistic-right-rating">
        <h5>Враження колег:</h5>
        <div className="rating">
          <Raiting number={4.2} />
        </div>
      </div>
    </div>
  );
}
