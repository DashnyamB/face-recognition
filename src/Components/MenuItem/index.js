import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const MenuItem = (props) => {
  return (
    <Link className="menuf__item" to={props.path ? props.path : "/"}>
      <div onClick={props.onClick}>{props.text}</div>
    </Link>
  );
};

export default MenuItem;
