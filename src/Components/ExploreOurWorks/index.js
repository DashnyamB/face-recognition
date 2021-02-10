import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import bgImg from "../../assets/image/background.jpg";

import "./style.scss";
const ExploreOurWorks = (props) => {
  return (
    <section
      style={{
        background: `url(${bgImg}) no-repeat`,
        backgroundSize: "cover",
      }}
      className="explore-our-works wrapper"
    >
      <h1 className="explore-our-works__title">explore our work</h1>
      <article className="explore-our-works__content">
        <ExploreWorkItem />
        <ExploreWorkItem />
        <ExploreWorkItem />
        <ExploreWorkItem />
      </article>
      {/* Button component */}
      <div className="explore-our-works__btn">
        <Button text="Explore our work" />
      </div>
    </section>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     kk: state.haha,
//   };
// };
export default connect()(ExploreOurWorks);
