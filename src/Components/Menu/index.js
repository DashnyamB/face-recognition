import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className="menu">
      <div className="login">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div className="item">Home</div>
      <div className="item">Services</div>
      <div className="item">Team</div>
      <div className="item">Contact Us</div>
    </div>
  );
}
