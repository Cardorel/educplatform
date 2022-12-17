import { Image } from "react-bootstrap";
import "./modal.scss";

export const ModalApp = ({ currentVideo, handleCloseModal }) => {
  const { title, author, video, teacherImg } = currentVideo;
  return (
    <div className="modal-app" onClick={handleCloseModal}>
      <div className="modal-app-container">
        <div className="modal-app-content" onClick={(e) => e.stopPropagation()}>
          <video controls src={video}></video>
          <div>
            <p className="title-video">{title}</p>
            <div className="modal-app-teacher">
              <Image src={teacherImg} alt="teacher-img" />
              <h4>{author}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
