import React from "react";
import { certificateData } from "../../../assets/consts/data";
import CertificateRightContent from "./CertificateRightContent";

export default function CertificatRight() {
  return (
    <div className="certificat-right">
      {certificateData?.map((data) => (
        <CertificateRightContent {...data} />
      ))}
    </div>
  );
}
