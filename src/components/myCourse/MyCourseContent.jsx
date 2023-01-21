import React from "react";
import { Image } from "react-bootstrap";

export default function MyCourseContent() {
  return (
    <div className="my-course-content">
      <div className="content-header">
        <h5>Мої курси/програми:</h5>
        <button>До всіх галузей</button>
      </div>
      <div className="content">
        <div className="row">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img-user"
            />
          </div>
          <h4>Назва курсу</h4>
          <p>Статус проходження курсу</p>
          <div className="content-progress">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <p>0%</p>
          </div>
          <div className="btn">
            <button>Перейти до курсу</button>
          </div>
        </div>
        <div className="row">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img-user"
            />
          </div>
          <h4>Назва курсу</h4>
          <p>Статус проходження курсу</p>
          <div className="content-progress">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <p>0%</p>
          </div>
          <div className="btn">
            <button>Перейти до курсу</button>
          </div>
        </div>
        <div className="row">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img-user"
              className="img-course"
            />
          </div>
          <h4>Назва курсу</h4>
          <p>Статус проходження курсу</p>
          <div className="content-progress">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <p>0%</p>
          </div>
          <div className="btn">
            <button>Перейти до курсу</button>
          </div>
        </div>
        <div className="row">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img-user"
            />
          </div>
          <h4>Назва курсу</h4>
          <p>Статус проходження курсу</p>
          <div className="content-progress">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <p>0%</p>
          </div>
          <div className="btn">
            <button>Перейти до курсу</button>
          </div>
        </div>
      </div>
      <div className="list">
        <p>список порожній</p>
      </div>
    </div>
  );
}
