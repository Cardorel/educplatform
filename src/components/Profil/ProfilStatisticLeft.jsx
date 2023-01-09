import React from "react";
import { Image } from "react-bootstrap";
import StatisticImg from "../../assets/svg/profil/statistic.svg";
import UsedIco from "../../assets/svg/profil/used.svg";
import ActiveIco from "../../assets/svg/profil/active.svg";

export default function ProfilStatisticLeft() {
  return (
    <div className="statistic-left">
      <h5>Статистика:</h5>
      <div className="statistic-left-content">
        <div className="activ-row">
          <h6>Активність:</h6>
          <p>Історія проектів</p>
        </div>
        <div className="statistic-row">
          <Image src={StatisticImg} alt="statistic" />
        </div>
        <div className="img-content">
          <div className="img-icon">
            <Image src={UsedIco} alt="used-ico" />
            <p>90%</p>
          </div>
          <div className="img-icon">
            <Image src={ActiveIco} alt="active-ico" />
            <p>60%</p>
          </div>
          <div className="time-content">
            <p>
              <span className="hour">7</span>
              <span className="hour-text">годин</span>
            </p>
            <h6>на тиждень</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
