import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HeaderDetailContent = ({
  description,
  teachers,
  price,
  startCourse,
  title,
  image,
  profilLogoUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div className="header-detail-content">
      <div className="header-detail-content-left">
        <div className="header-detail-content-logo">
          <Image
            src={profilLogoUrl}
            alt="ibm-img"
            className="header-detail-content-img"
          />
        </div>
        <div className="header-detail-content-paras">
          <h3>
            Професійна сертифікаційна програма:{" "}
            <span className="d-block">“{title}”</span>
          </h3>
          <p>{description}</p>
          <div className="paras-content">
            <p>
              <span>Виладачі:</span>
              <span>
                {teachers[0].surname} {teachers[0].name}
              </span>
              {teachers.length > 1 && (
                <span>+ {teachers.length - 1} інших</span>
              )}
            </p>
            <p>
              <span>Варість навчання:</span>
              <span className="price">
                {price > 0 ? price + " грн" : "Безкоштовно"}
              </span>
            </p>
          </div>
          <button
            className="header-detail-content-btn"
            onClick={() => navigate("/payment")}
          >
            <span className="go-to-btn">ПРОЙТИ НАВЧАННЯ</span>
            <span>Початок {startCourse}</span>
          </button>
        </div>
      </div>
      <div className="header-detail-content-right">
        <Image
          src={image}
          alt="image-detail"
          className="header-detail-content-img"
        />
      </div>
    </div>
  );
};
