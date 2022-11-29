import { Image } from "react-bootstrap";
import Certif from "../../assets/images/certificate.png";

export default function Certificate({ advs, logoUrl }) {
  return (
    <div className="certificate-row">
      <div className="certificate-col">
        <h3>Щоб отримати сертифікат слухач повинен:</h3>
        <ul>
          {advs?.map((adv, idx) => (
            <li key={idx}>{adv}</li>
          ))}
        </ul>
      </div>
      <div className="certificate-col">
        <Image src={Certif} alt="certificate" />
        <Image className="certificate-image" src={logoUrl} alt="logo-image" />
      </div>
    </div>
  );
}
