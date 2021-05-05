import React from "react";
import css from "./style.module.scss";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${css.Button} ${props.type === "outline" ? css.Outline : ""}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
