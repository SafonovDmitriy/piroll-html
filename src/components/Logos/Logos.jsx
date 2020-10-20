import React from "react";
import s from "./Logos.module.css";
import vintageHandMade from "../../Files/Images/1.png";
import mountain from "../../Files/Images/2.png";
import collection from "../../Files/Images/3.png";
import mountainBike from "../../Files/Images/4.png";

const Logos = () => {
  const logos = [
    { alt: "VintageHandMade", src: vintageHandMade },
    { alt: "Mountain", src: mountain },
    { alt: "Collection", src: collection },
    { alt: "MountainBike", src: mountainBike },
    { alt: "VintageHandMade", src: vintageHandMade }
  ];
  return (
    <div className={s.container}>
      {logos.map((logo, idx) => {
        return <img key={`logo-${idx}`} src={logo.src} alt={logo.alt} />;
      })}
    </div>
  );
};

export default Logos;
