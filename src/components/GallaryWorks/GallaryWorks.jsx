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
      {gallary.map((work, idx) => {
        return (
          <div
            key={`GallaryWorks-${idx}`}
            className={s.workItem}
            style={{ backgroundColor: work.color }}
          >
            <div className={s.workItem__look}>
              <img key={`GallaryWorksImg-${idx}`} src={look} alt="" />
            </div>
          </div>
        );
      })}
      <div className={s.container__footer}>
        <TextBlockTitle
          key={`GallaryWorksTitleFooter`}
          title="load more work"
        />
      </div>
    </div>
  );
};

export default GallaryWorks;
