import React from "react";
import s from "./AboutUs.module.css";
import signature from "../../Files/Images/signature_grey.png";
import {
  TextBlockSubtitle,
  TextBlockTitle
} from "../../elements/TextBlock/TextBlock";
const AboutUs = () => {
  return (
    <div className={s.container}>
      <div>
        <TextBlockTitle title="About Us" />
        <TextBlockSubtitle
          subtitle=" Divide have don't man wherein air fourth. Own itself make have night
          won't make. A you under Seed appear which good give. Own give air
          without fowl moveth dry first heaven fruit, dominion she'd won't very
          all."
        />
        <img src={signature} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
