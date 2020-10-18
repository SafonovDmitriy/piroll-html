import React from "react";
import s from "./TextBlock.module.css";
const TextBlockTitle = ({ title, ...props }) => {
  return (
    <div className={s.title}>
      <h3>{title}</h3>
    </div>
  );
};
const TextBlockSubtitle = ({ subtitle, ...props }) => {
  return (
    <div className={s.subtitle}>
      <p>{subtitle}</p>
    </div>
  );
};

export { TextBlockTitle, TextBlockSubtitle };
