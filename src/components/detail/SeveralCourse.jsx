import { Image } from "react-bootstrap";
import TropheIcon from "../../assets/svg/trophe.svg";

export default function SeveralCourse() {
  return (
    <div className="several-course-container">
      <h3 className="several-course-title">
        Професійна сертифікаційна програма включає декілька курсів
      </h3>
      <div className="several-course-row">
        <div className="several-course-col">
          <div className="several-course-content">
            <div className="several-course-col-image">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
                alt="image-blog"
              />
            </div>
            <div className="several-course-col-content">
              <h3 className="title">КУРС</h3>
              <p className="sub-title">Наука про дані, що це?</p>
              <p className="text">
                Отримайте повне розуміння того, що таке Data Science, дізнайтеся
                про такі концепції, як машинне навчання, глибоке навчання та
                нейронні мережі. Пройшовши цей вступний курс, ви почнете свою
                подорож у процвітаючу сферу науки про дані!
              </p>
              <p className="author">
                <span>Автор: </span>
                <span>Antony Corel</span>
              </p>
            </div>
          </div>
        </div>
        <div className="several-course-col">
          <div className="several-course-content">
            <div className="several-course-col-image">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
                alt="image-blog"
              />
            </div>
            <div className="several-course-col-content">
              <h3 className="title">КУРС</h3>
              <p className="sub-title">Наука про дані, що це?</p>
              <p className="text">
                Отримайте повне розуміння того, що таке Data Science, дізнайтеся
                про такі концепції, як машинне навчання, глибоке навчання та
                нейронні мережі. Пройшовши цей вступний курс, ви почнете свою
                подорож у процвітаючу сферу науки про дані!
              </p>
              <p className="author">
                <span>Автор: </span>
                <span>Antony Corel</span>
              </p>
            </div>
          </div>
        </div>
        <div className="several-course-col">
          <div className="several-course-content">
            <div className="several-course-col-image">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
                alt="image-blog"
              />
            </div>
            <div className="several-course-col-content">
              <h3 className="title">КУРС</h3>
              <p className="sub-title">Наука про дані, що це?</p>
              <p className="text">
                Отримайте повне розуміння того, що таке Data Science, дізнайтеся
                про такі концепції, як машинне навчання, глибоке навчання та
                нейронні мережі. Пройшовши цей вступний курс, ви почнете свою
                подорож у процвітаючу сферу науки про дані!
              </p>
              <p className="author">
                <span>Автор: </span>
                <span>Antony Corel</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="trophe-col">
        <div className="trophe-image">
          <Image src={TropheIcon} alt="trophe-icon" />
        </div>
        <div className="trophe-paragraph">
          <h3>Отримайте свій сертифікат</h3>
          <p>
            Складіть фінальний іспит та отримаєте сертифікат про проходження
          </p>
        </div>
      </div>
    </div>
  );
}
