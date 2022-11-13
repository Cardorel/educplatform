import React from "react";
import { Image, Row } from "react-bootstrap";
import DiagramBlue from "../../assets/svg/diagramBlue.svg";
import DiagramRose from "../../assets/svg/diagramRose.svg";
import DiagramOrange from "../../assets/svg/diagramOrange.svg";
import KursDiagram from "../../assets/svg/diagram.svg";
import SpecialDiagram from "../../assets/svg/specialDiagram.svg";
import Graphs from "../../assets/svg/graphs.svg";

export default function StatisticTop() {
  return (
    <Row className="statistic-top-row">
      <div className="statistic-top-col statistic-top-col-first">
        <h3 className="statistic-top-title">Досягнення наших студентів:</h3>
        <ul>
          <li>
            <Image className="statistic-top-image" src={DiagramOrange} alt="diagram-rose" />
            <p>Студентів підвищили рівень успішності</p>
          </li>
          <li>
            <Image className="statistic-top-image" src={DiagramRose} alt="diagram-rose" />
            <p>Студентів отримало золоту медаль/роботу мрії</p>
          </li>
          <li>
            <Image className="statistic-top-image" src={DiagramBlue} alt="diagram-rose" />
            <p>Беруть участь у конкурсах та займають призові місця</p>
          </li>
        </ul>
      </div>
      <div className="statistic-top-col">
        <div className="statistic-top-quantity">
          <p>Загальна кількість відвідувачів:</p>
          <Image src={KursDiagram} alt="diagram-of-total-quantity" />
        </div>
        <div className="statistic-top-special">
          <h3>За спеціальностями:</h3>
          <div className="statistic-top-diagram-content">
            <ul>
              <li className="item-it-sphere">It-сфера</li>
              <li className="item-right">Право</li>
              <li className="item-busness">Бізнес</li>
              <li className="item-management">Менеджмент</li>
            </ul>
            <div>
              <Image src={SpecialDiagram} alt="diagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="statistic-top-col graphs-content">
        <h3>Активність:</h3>
        <Image src={Graphs} alt="graphs" />
      </div>
    </Row>
  );
}
