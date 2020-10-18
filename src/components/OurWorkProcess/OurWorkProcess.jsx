import React from "react";

import {
  TextBlockSubtitle,
  TextBlockTitle
} from "../../elements/TextBlock/TextBlock";
import s from "./OurWorkProcess.module.css";
const OurWorkProcess = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.container__box}>
          <div className={s.box__title}>
            <TextBlockTitle title="Our Work Process" />
          </div>
          <div className={s.box__subtitle}>
            <TextBlockSubtitle
              subtitle="Was years it seasons was there form he in in them together over that, 
third sixth gathered female creeping bearing behold years."
            />
          </div>
        </div>
      </div>
      <div className={s.container__video}>
        <iframe
          title="here video"
          src="https://www.youtube.com/embed/ysz5S6PUM-U"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default OurWorkProcess;
