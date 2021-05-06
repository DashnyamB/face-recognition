import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const MenuItem = (props) => {
  useEffect(() => {

  }, [props])
  const scrollInto = () => {
    window.scrollTo({
      top: props.references.offsetTop - 40,
      behavior: "smooth"
    })
  }

  return (
    <Link className="menuf__item" to={props.path ? props.path : " "}>
      <div onClick={props.references ? scrollInto : null}
      >{props.text}</div>
    </Link>
  );
};

export default MenuItem;
