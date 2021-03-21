import React from "react";
import "./style.scss";
import bg from "../../assets/image/largehero-bg.jpg";
import ScrollIcon from "../ScrollIcon";
const LargeHero = () => {
  return (
    <section
      className="large-hero"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="large-hero__content">
        <div className="large-hero__content__title">
          <h1>facial recognition</h1>
          <h2>team #one</h2>
        </div>
        <h3>better performance - responsible - design and development</h3>
      </div>
      <div className="large-hero__scroll-icon">
        <ScrollIcon />
      </div>
    </section>
  );
};

export default LargeHero;
