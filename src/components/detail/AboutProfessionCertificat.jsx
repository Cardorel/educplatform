import { Image } from "react-bootstrap";
import PlusIcon from "../../assets/svg/plusIcon.svg";

export default function AboutProfessionCertificat({ certificates, infos }) {
  return (
    <div className="profession-certificat">
      <div className="profession-certificat-content">
        <h3 className="certificate-title">Про професійну сертифікацію</h3>
        {certificates?.map((certificate, idx) => (
          <p className="profession-certificat-text" key={idx}>
            {certificate}
          </p>
        ))}
      </div>
      <div className="profession-certificat-infos">
        <h3 className="info-title">Чому ви навчитесь:</h3>
        {infos?.map(({ id, text }) => (
          <div key={id} className="infos">
            <Image src={PlusIcon} alt="plus-ico" />
            <p className="profession-certificat-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
