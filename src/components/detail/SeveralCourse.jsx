import { Image } from "react-bootstrap";
import TropheIcon from "../../assets/svg/trophe.svg";
import Play from "../../assets/svg/play.svg";
import { useDispatch } from "react-redux";
import { getVideo } from "../../toolkit/reducers/getVideoSlice";

export default function SeveralCourse({ severalCourse }) {
  const dispatch = useDispatch();
  const handleClickVideo = (video) => {
    console.log("here");
    dispatch(getVideo(video));
  };
  return (
    <div className="several-course-container">
      <h3 className="several-course-title">
        Професійна сертифікаційна програма включає декілька курсів
      </h3>
      <div className="several-course-row">
        {severalCourse?.map((course) => (
          <div className="several-course-col" key={course.id}>
            <div className="several-course-content">
              <div onClick={() => handleClickVideo(course)}>
                <div className="several-course-col-image">
                  <Image src={course.image} alt={`image-${course.id}`} />
                  <div className="image-play-content">
                    <Image className="image-play" src={Play} alt="image-play" />
                  </div>
                </div>
              </div>
              <div className="several-course-col-content">
                <h3 className="title">КУРС</h3>
                <p className="sub-title">{course.title}</p>
                <p className="text">{course.description}</p>
                <p className="author">
                  <span>Автор: </span>
                  <span>{course.author}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
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
