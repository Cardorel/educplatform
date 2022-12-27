import React from "react";
import FaktImg from "../../assets/images/fakteImag.png";
import UnPlusUnImg from "../../assets/images/unPlusUn.png";
import KorespondImg from "../../assets/images/Korespond.png";
import { Image } from "react-bootstrap";

export default function AboutUsPartner() {
  return (
    <div className="about-partner">
      <h4>ЗМI про нас:</h4>
      <div className="about-partner-img">
        <Image src={FaktImg} alt="img-fakt" />
        <Image src={UnPlusUnImg} alt="img-unPlusun" />
        <Image src={KorespondImg} alt="img-korespond" />
      </div>
    </div>
  );
}
