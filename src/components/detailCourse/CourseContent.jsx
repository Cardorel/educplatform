import Content from "./Content";
import Certificat from "../../assets/images/certificate.png";

export default function CourseContent({
  data,
  handleClickVideo,
  handleCertificate,
}) {
  return (
    <div className="course-user">
      <div className="row">
        {data?.map((d, indx) => (
          <Content
            key={d.id}
            indx={indx}
            handleClickVideo={handleClickVideo}
            {...d}
          />
        ))}
        <div className="certificate" role="button" onClick={handleCertificate}>
          <a download="certificate.png" href="../../assets/images">
            <Content
              title="тестування"
              text="Сертифікаційне"
              image={Certificat}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
