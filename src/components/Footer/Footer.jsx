import React from "react";
import s from "./Footer.module.css";
import {
  TextBlockTitle,
  TextBlockSubtitle
} from "../../elements/TextBlock/TextBlock";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.container__designed}>
        <TextBlockTitle title="Piroll Design, Inc." />
        <TextBlockSubtitle subtitle="© 2017 Piroll. All rights reserved.Designed by robirurk." />
      </div>
      <div className={s.container__contact}>
        <TextBlockSubtitle subtitle="hello@pirolltheme.com +44 987 065 908 " />
      </div>
      <div>
        <nav>
          <label>
            <Link to="/">Projects</Link>
          </label>
          <label>
            <Link to="/">About</Link>
          </label>
          <label>
            <Link to="/">Services</Link>
          </label>
          <label>
            <Link to="/">Carreer</Link>
          </label>
        </nav>
        <nav>
          <label>
            <Link to="/">News</Link>
          </label>
          <label>
            <Link to="/">Events</Link>
          </label>
          <label>
            <Link to="/">Contacts</Link>
          </label>
          <label>
            <Link to="/">Legals</Link>
          </label>
        </nav>
      </div>
      <div>
        <nav>
          <label>
            <Link to="/">Facebook</Link>
          </label>
          <label>
            <Link to="/">Twitter</Link>
          </label>
          <label>
            <Link to="/">Instagram</Link>
          </label>
          <label>
            <Link to="/">Dribbble</Link>
          </label>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
