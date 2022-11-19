import React from "react";
import AboutHeader from "../aboutHeader/AboutHeader";
import HomeContact from "../contact/HomeContact";
import FormatLearning from "../formatLearning/FormatLearning";
import ForWhom from "../forWhom/ForWhom";
import HowIsWork from "../main/howIsWork/HowIsWork";
import Specialties from "../specialtiesBlock/Specialties";
import Statistic from "../statistic/Statistic";

export default function Home() {
  return (
    <>
      <AboutHeader />
      <HowIsWork />
      <Specialties />
      <ForWhom />
      <Statistic />
      <FormatLearning />
      <HomeContact />
    </>
  );
}
