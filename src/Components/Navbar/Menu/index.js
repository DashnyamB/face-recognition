import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className="menuf">
      <div className="menuf__icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="menuf__item">Hhhhh</div>
      <div className="menuf__item">Services</div>
      <div className="menuf__item">Team</div>
      <div className="menuf__item">Contact Us</div>
    </div>
  );
}
