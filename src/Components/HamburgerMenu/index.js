import React from "react";
import "./style.scss";
const HamburgerMenu = (props) => {
  return (
    <div onClick={props.onClick} className="hamburger-menu">
      <div className="hamburger-menu__content"></div>
    </div>
  );
};

export default HamburgerMenu;
