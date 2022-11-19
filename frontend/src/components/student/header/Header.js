import React from "react";
import { Image } from "react-bootstrap";
import BgBottom from "../../../assets/svg/student/bgBottom.svg";

export default function HeaderStudent() {
  return (
    <section className="student-row student-row-header">
      <div className="student-col">
        <h3 className="student-title">
          <span>Вдосконалюйте свої навички та просувайте свою кар’єру за допомогою</span>
          <span className="univ-text">Universal Course Sharing</span>
        </h3>
        <p className="student-header-paragraph">
          Enim vulputate in ultrices volutpat mattis fermentum ac tortor. Morbi
          risus faucibus sed augue aliquam. Tempus at commodo dictum sit. Amet
          pellentesque sed lectus in accumsan. Ac mollis eleifend arcu est
          cursus viverra vitae sodales pretium. Enim vulputate in ultrices
          volutpat mattis fermentum ac tortor. Morbi risus faucibus sed augue
          aliquam. Tempus at commodo dictum sit. Amet pellentesque sed lectus in
          accumsan. Ac mollis eleifend arcu est cursus viverra vitae sodales
          pretium.
        </p>
      </div>
      <div className="student-col">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
          className="student-header-image"
          alt="profil-image"
        />
      </div>
      <div className="bg-bottom">
        <Image src={BgBottom} alt="bg-bottom" />
      </div>
    </section>
  );
}
