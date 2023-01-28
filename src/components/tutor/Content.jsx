import React from "react";
import { Image } from "react-bootstrap";

export default function Content() {
  return (
    <div className="content">
      <div className="img-content">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/files%2FBG_fon.png?alt=media&token=9b59ce5b-b2cb-4551-8a3e-277389aa564a"
          alt="img-course"
        />
      </div>
      <p className="name">Назва відео</p>
    </div>
  );
}
