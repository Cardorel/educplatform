import React from "react";
import { Link } from "react-router-dom";
import { certificateData } from "../../../assets/consts/data";
import CertificateRightContent from "./CertificateRightContent";

export default function CertificatRight() {
  return (
    <div className="certificat-right">
      {certificateData
        ?.filter((d) => d.kind === "Професійна сертифікація")
        .slice(0, 6)
        .map((data) => (
          <Link key={data?.id} to={`/student/${data?.id}`}>
            <CertificateRightContent {...data} />
          </Link>
        ))}
    </div>
  );
}
