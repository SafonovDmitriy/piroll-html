import React from "react";
import s from "./ProfessionalSkills.module.css";
import { TextBlockTitle } from "../../elements/TextBlock/TextBlock";

const ProfessionalSkills = () => {
  const skills = [
    { name: "UI/UX Design", value: 75 },
    { name: "web development", value: 90 },
    { name: "marketing", value: 65 }
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <span className={s.title}>
          <TextBlockTitle title="Professional Skills" />
        </span>

        <div className={s.skills}>
          {skills.map((skill, idx) => {
            return (
              <>
                <TextBlockTitle
                  id={idx}
                  title={`${skill.name}  ${skill.value}%`}
                />
                <div
                  className={s.scale}
                  style={{
                    background: `linear-gradient(90deg,#10c9c3 ${skill.value}%,#d8d8d8 ${skill.value}%,#d8d8d8 100%,#10c9c3 100%)`
                  }}
                ></div>
                
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
