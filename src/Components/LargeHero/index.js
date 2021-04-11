import React from "react";
import "./style.scss";

import ScrollIcon from "../ScrollIcon";
const LargeHero = (props) => {
  return (
    <section
      className="large-hero"
      style={{
        backgroundImage: `url("${props.bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.type === "video" ? (
        <video autoPlay muted loop className="login__video">
          <source src={props.bg} type="video/mp4" />
        </video>
      ) : null}
      <div className="large-hero__content">
        <div className="large-hero__content__title">
          <h1
            className={`${
              props.type === "video" ? "large-hero__content__title--narrow" : ""
            } `}
          >
            {props.title}
          </h1>
          {props.type != "video" ? <h2>team #one</h2> : null}
        </div>
        <h3
          className={`${
            props.type === "video" ? "large-hero__content__subtitle--black" : ""
          } `}
        >
          {props.subtitle}
        </h3>
      </div>
      <div className="large-hero__scroll-icon">
        <ScrollIcon />
      </div>
    </section>
  );
};

export default LargeHero;
