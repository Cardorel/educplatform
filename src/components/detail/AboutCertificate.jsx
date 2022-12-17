import React from "react";
import { Image } from "react-bootstrap";
import BgImg from "../../assets/images/BG_learn.png";
import EllipseImg from "../../assets/svg/detailEllipse.svg";

export default function AboutCertificate({ abreviationSchool, profilLogoUrl }) {
  return (
    <div className="about-certificate-content">
      <div className="about-certificate-bgImg">
        <Image src={BgImg} alt="bg-detail" />
      </div>
      <div className="about-certificate-content-left">
        <h3>Навчайтесь і отримуйте необхідні для роботи навики</h3>
        <div className="paragraph-content">
          <p className="bold-paragraph">
            Розпочніть роботу в сформованій області науки про дані, пройшовши
            професійну сертифікацію {abreviationSchool}. Вивчіть основи науки
            про дані та отримайте практичні навики, роботи з інструментами,
            мовами та бібліотеками, які використовуються професіоналами в галузі
            науки про дані.
          </p>
          <p className="bold-paragraph">
            Популярні посади: Спеціаліст по даним, бізнес-аналітик, аналітик
            даних, архітектор даних, інженер даних, аналітик по маркетингу,
            аналітик по операціям, спеціаліст з кількісного аналізу
          </p>
          <p>
            ¹ Дані звіту компанії Burning Glass Labor Insight Report (медіана з
            досвідом роботи від 0 до 2 років), США, за період з 01.04.2021 по
            31.03.2022.
          </p>
          <p>
            ² На підставі відповіді на питання про результати учащихся Cousera,
            США, 2021 рік.
          </p>
        </div>
      </div>
      <div className="about-certificate-content-right">
        <div className="about-certificate-logo">
          <Image src={profilLogoUrl} className="image-logo" alt="ibm-img" />
        </div>
        <div className="ellispe-img">
          <Image src={EllipseImg} alt="ellipse" />
        </div>
        <div className="about-certificate-content-paras">
          <p className="about-certificate-paragraph left">
            <span className="about-certificate-paragraph-color">
              102 400 дол. США
            </span>
            <span> - медіанна зарплата початківців¹</span>
          </p>
          <p className="about-certificate-paragraph right">
            <span className="about-certificate-paragraph-color">26%</span>
            <span> випускників із сертифікатом розпочали нову кар'єру²</span>
          </p>
          <p className="about-certificate-paragraph left">
            <span className="about-certificate-paragraph-color">56 727</span>
            <span> наявних вакансій у сфері науки¹ у всьому світі</span>
          </p>
          <p className="about-certificate-paragraph right">
            <span className="about-certificate-paragraph-color">
              {abreviationSchool}
            </span>
            <span>
              {" "}
              надає спеціальний доступ до мережі талантів {abreviationSchool}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
