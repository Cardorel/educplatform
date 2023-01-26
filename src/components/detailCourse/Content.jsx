import { Image } from "react-bootstrap";
import Blocked from "../../assets/svg/blocked.svg";

export default function Content({
  id,
  image,
  title,
  text = "Курс",
  isClicked,
  handleClickVideo,
  indx,
}) {
  return (
    <div
      className="col"
      role="button"
      disabled={isClicked}
      onClick={() => handleClickVideo(id, indx)}
    >
      <div className="col-right">
        <Image src={image} alt="img-user" className="img-user" />
        <div className="text-content">
          <h5>
            {text} {id}
          </h5>
          <p className="name" title={title}>
            {title}
          </p>
        </div>
      </div>
      <button
        className={`col-left ${
          (isClicked || indx === 0) && "clicked"
        } certificate-btn`}
        style={{ backgroundColor: "#FF5600" }}
      >
        {(isClicked || indx !== 0) && <Image src={Blocked} alt="message" />}
      </button>
    </div>
  );
}
