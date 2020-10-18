import React from "react";
import s from "./ContactUs.module.css";
import CustomButton from "./../../elements/utils/CustomButton/CustomButton";
import {
  TextBlockSubtitle,
  TextBlockTitle
} from "../../elements/TextBlock/TextBlock";

const ContactUs = () => {
  return (
    <div className={s.container}>
      <div>
        <TextBlockTitle title="We Design and Develop" />
        <TextBlockSubtitle
          subtitle="We are a new design studio based in USA. We have over 20 years of
          combined experience, and know a thing or two about designing websites
          and mobile apps."
        />

        <CustomButton value="Contact us"></CustomButton>
      </div>
    </div>
  );
};

export default ContactUs;
