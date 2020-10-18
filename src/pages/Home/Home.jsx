import React from "react";
import AboutUs from "./../../components/AboutUs/AboutUs";
import ContactUs from "./../../components/ContactUs/ContactUs";
import GallaryWorks from "./../../components/GallaryWorks/GallaryWorks";
import InformationAboutUs from "./../../components/InformationAboutUs/InformationAboutUs";
import OurWorkProcess from "./../../components/OurWorkProcess/OurWorkProcess";
import ProfessionalSkills from "./../../components/ProfessionalSkills/ProfessionalSkills";
import SliderComponent from "./../../components/Slider/Slider";
import WorkArea from "./../../components/WorkArea/WorkArea";
import Logos from "./../../components/Logos/Logos";
import NeedAProject from './../../components/NeedAProject/NeedAProject';

const HomePage = () => {
  const slides = [
    {
      title:
        "“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”",
      autor: "Michael Hopkins"
    },
    {
      title:
        "“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”",
      autor: "Michael Hopkins2"
    },
    {
      title:
        "“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”",
      autor: "Michael Hopkin3"
    }
  ];
  return (
    <>
      <ContactUs />
      <AboutUs />
      <ProfessionalSkills />
      <InformationAboutUs />
      <GallaryWorks />
      <OurWorkProcess />
      <WorkArea />
      <SliderComponent slides={slides} />
      <Logos />
      <NeedAProject />
    </>
  );
};

export default HomePage;
