import React, { useState } from "react";
import s from "./Header.module.css";
import logo from "../../Files/Images/logo_black.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [radioValue, setRadioValue] = useState("1");
  const menuButtons = [
    { name: "Home", value: "1" },
    { name: "About", value: "2" },
    { name: "Work", value: "3" },
    { name: "Process", value: "4" },
    { name: "Services", value: "5" },
    { name: "Testimonials", value: "6" },
    { name: "Contacts", value: "7" }
  ];
  return (
    <div className={s.container}>
      <img src={logo} alt="" />

      <nav className={s.menu}>
        {menuButtons.map((menuItem, idx) => (
          <Link to={"/" + menuItem.name} key={idx}>
            <p
              key={idx}
              name="menuItem"
              className={
                radioValue === menuItem.value ? s.activeItem : s.diactivateItem
              }
              value={menuItem.value}
              onClick={() => setRadioValue(menuItem.value)}
            >
              {menuItem.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
