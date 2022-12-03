import React from "react";
import { Image } from "react-bootstrap";
import LogoIcon from "../../assets/svg/logo.svg";

export default function Logo() {
  return <Image src={LogoIcon} alt="logo" />;
}
