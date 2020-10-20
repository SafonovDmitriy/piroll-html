import React from "react";
import s from "./WorkArea.module.css";
import diamond from "../../Files/Images/diamond_grey.png";
import arc from "../../Files/Images/arc_grey.png";
import joy from "../../Files/Images/joy_grey.png";
import magicWand from "../../Files/Images/magic-wand_grey.png";
import paintBucket from "../../Files/Images/paint-bucket_grey.png";
import phone from "../../Files/Images/phone_grey.png";
import plane from "../../Files/Images/plane_grey.png";
import star from "../../Files/Images/star_grey.png";
import {
  TextBlockTitle,
  TextBlockSubtitle
} from "../../elements/TextBlock/TextBlock";
const WorkArea = () => {
  const workArea = [
    {
      title: "ui / ux design",
      subtitle: "Be set fourth land god darkness make it wherein own",
      img: diamond
    },
    {
      title: "web development",
      subtitle: "A she'd them bring void moving third she'd kind fill",
      img: arc
    },
    {
      title: "app / mobile",
      subtitle: "Dominion man second spirit he,earth they're creeping",
      img: phone
    },
    {
      title: "game design",
      subtitle: "Morning his saying moveth it multiply appear life be",
      img: joy
    },
    {
      title: "SEO / marketing",
      subtitle: "Give won't after land fill creeping meat you, may",
      img: plane
    },
    {
      title: "photography",
      subtitle: "Creepeth one seas cattle grass give moving saw give",
      img: star
    },
    {
      title: "graphic design",
      subtitle: "Open, great whales air rule for, fourth life whales",
      img: magicWand
    },
    {
      title: "illustrations",
      subtitle: "Whales likeness hath, man kind for them air two won't",
      img: paintBucket
    }
  ];
  return (
    <div className={s.container}>
      {workArea.map((workItem, idx) => {
        return (
          <div key={`WorkArea-${idx}`} className={s.contaner__workItem}>
            <img key={`WorkAreaImg-${idx}`} src={workItem.img} alt="" />
            <TextBlockTitle
              key={`WorkAreaTitle-${idx}`}
              title={workItem.title}
            />
            <TextBlockSubtitle
              key={`WorkAreaSubtitle-${idx}`}
              subtitle={workItem.subtitle}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WorkArea;
