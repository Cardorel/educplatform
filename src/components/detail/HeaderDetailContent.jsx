import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUserData } from "../../toolkit/reducers/getCurrentData";
import { setCourse } from "../../toolkit/reducers/setCourseData";
import HeaderBottom from "./HeaderBottom";

export const HeaderDetailContent = (detailData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.course);

  console.log(data?.refNumber);

  const {
    description,
    detailContent: { teachers },
    price,
    startCourse,
    title,
    image,
    profilLogoUrl,
    purchaseTitle,
    purchaseText,
    devise,
    plan,
  } = detailData;
  const handlePayment = () => {
    dispatch(
      getCurrentUserData({ plan, price, purchaseTitle, purchaseText, devise })
    );
    dispatch(setCourse(detailData));
    navigate("/payment");
  };
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
            {data?.refNumber === undefined && (
              <p>
                <span>Варість навчання:</span>
                <span className="price">
                  {price > 0 ? price + " грн" : "Безкоштовно"}
                </span>
              </p>
            )}
          </div>
          <button className="header-detail-content-btn" onClick={handlePayment}>
            <span className="go-to-btn">
              {" "}
              {data?.refNumber === undefined
                ? "ПРОЙТИ НАВЧАННЯ"
                : "Перейти до курсу"}
            </span>
            <span>Початок {startCourse}</span>
          </button>
        </div>
      </div>
      <div>
        <div className="header-detail-content-right">
          <Image
            src={image}
            alt="image-detail"
            className="header-detail-content-img"
          />
        </div>
        <HeaderBottom />
      </div>
    </div>
  );
};
