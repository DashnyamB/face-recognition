import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className="menu">
      <div className="menu__icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="menu__item">Home</div>
      <div className="menu__item">Services</div>
      <div className="menu__item">Team</div>
      <div className="menu__item">Contact Us</div>
    </div>
  );
}
