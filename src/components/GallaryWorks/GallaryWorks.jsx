import React from "react";
import { TextBlockTitle } from "../../elements/TextBlock/TextBlock";
import look from "../../Files/Images/look_white.png";
import s from "./GallaryWorks.module.css";
const GallaryWorks = () => {
  const gallary = [
    { color: "black" },
    { color: "green" },
    { color: "grey" },
    { color: "black" },
    { color: "green" },
    { color: "grey" },
    { color: "black" },
    { color: "green" }
  ];

  return (
    <div className={s.container}>
      {gallary.map(work => {
        return (
          <div className={s.workItem} style={{ backgroundColor: work.color }}>
            <div className={s.workItem__look}>
              <img src={look} alt="" />
            </div>
          </div>
        );
      })}
      <div className={s.container__footer}>
        <TextBlockTitle title="load more work" />
      </div>
    </div>
  );
};

export default GallaryWorks;
