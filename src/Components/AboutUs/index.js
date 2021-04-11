import React from "react";
import Button from "../Button";
import "./styles.scss";
const AboutUs = () => {
  return (
    <section className="about-us wrapper">
      <h1 className="about-us wrapper_header">
        We are complex of teamwork and creativity
      </h1>
      <div className="up-line"></div>
      <h2>
        Face recognition system, use computer algorithms to pick out specific,
        distinctive details about a person's face.
      </h2>
      <p>
        We are inspired to build a website that uses four facial recognition,
        such as filters on instagram{" "}
      </p>
      <div className="about-us__button">
        <Button text="about us" />
      </div>
    </section>
  );
};

export default AboutUs;
