import React from "react";
import s from "./InformationAboutUs.module.css";
import clock from "../../Files/Images/clock_white.png";
import like from "../../Files/Images/like_white.png";
import portfolio from "../../Files/Images/portfolio_white.png";
import star from "../../Files/Images/star_white.png";
import { TextBlockTitle } from "../../elements/TextBlock/TextBlock";
const InformationAboutUs = () => {
  const infoItem = [
    { image: portfolio, count: 548, inform: "projects completed" },
    { image: clock, count: 1465, inform: "WORKING HOURS" },
    { image: star, count: 612, inform: "POSITIVE FEEDBACKS" },
    { image: like, count: 735, inform: "HAPPY CLIENTS" }
  ];
  return (
    <div className={s.container}>
      {infoItem.map(item => (
        <div className={s.infoItem}>
          <img src={item.image} alt="" />
          <span className={s.inform}>
            <TextBlockTitle title={item.count} />
            <TextBlockTitle title={item.inform} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default InformationAboutUs;
