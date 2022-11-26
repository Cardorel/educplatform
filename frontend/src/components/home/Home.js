import React from "react";
import { Image } from "react-bootstrap";
import AboutHeader from "../aboutHeader/AboutHeader";
import HomeContact from "../contact/HomeContact";
import FormatLearning from "../formatLearning/FormatLearning";
import ForWhom from "../forWhom/ForWhom";
import HowIsWork from "../main/howIsWork/HowIsWork";
import Specialties from "../specialtiesBlock/Specialties";
import Statistic from "../statistic/Statistic";
import BgColor from '../../assets/images/bgAb.png'
import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="about-work">
        <AboutHeader />
        <HowIsWork />
        <div className="bg-color">
          <Image src={BgColor} alt="bg-color" />
        </div>
      </div>
      <Specialties />
      <ForWhom />
      <Statistic />
      <FormatLearning />
      <HomeContact />
    </>
  );
}
