import IbmImg from "../../assets/images/ibm.png";
import { Image } from "react-bootstrap";
import IBM from "../../assets/svg/ibm.svg";

export const HeaderDetailContent = () => {
  return (
    <div className="header-detail-content">
      <div className="header-detail-content-left">
        <div className="header-detail-content-logo">
          <Image
            src={IbmImg}
            alt="ibm-img"
            className="header-detail-content-img"
          />
        </div>
        <div className="header-detail-content-paras">
          <h3>
            Професійна сертифікаційна програма: “Введення в науку про дані”
          </h3>
          <p>
            Розпочніть свою кар’єру в галузі обробки даних і машинного навчання.
            Розвивайте навички дослідження даних, вивчайте Python і SQL,
            аналізуйте та візуалізуйте дані, створюйте моделі машинного
            навчання. Диплом або попередній досвід не потрібні.
          </p>
          <div className="paras-content">
            <p>
              <span>Виладачі:</span>
              <span>Antony Corel + 4 інших</span>
            </p>
            <p>
              <span>Варість навчання:</span>
              <span className="price">13 500 грн</span>
            </p>
          </div>
          <button className="header-detail-content-btn">
            <span className="go-to-btn">ПРОЙТИ НАВЧАННЯ</span>
            <span>Початок 20.01.2023</span>
          </button>
        </div>
      </div>
      <div className="header-detail-content-right">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
          alt="image-detail"
          className="header-detail-content-img"
        />
        <Image
          src={IBM}
          alt="ibm-logo"
          className="header-detail-content-logo"
        />
      </div>
    </div>
  );
};
