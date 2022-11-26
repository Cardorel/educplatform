import React from "react";
import "./statistic.scss";
import StatisticBottom from "./StatisticBottom";
import StatisticTop from "./StatisticTop";

export default function Statistic() {
  return (
    <div className='statistic-home'>
      <StatisticTop />
      <StatisticBottom />
    </div>
  );
}
