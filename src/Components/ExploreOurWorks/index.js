import React from "react";
import { connect } from "react-redux";
import "./style.scss";
const ExploreOurWorks = (props) => {
  return (
    <section className="explore-our-works wrapper">
      <h1 className="explore-our-works__title">explore our work</h1>
      <article className="explore-our-works__content">
        {/* Нэг филтер */}
        <div className="explore-our-works__content__item">
          <figure className="explore-our-works__content__item__img">
            <img
              src="https://wehavezeal.com/wp-content/uploads/2018/11/carousel-3.jpg"
              alt="png"
            />
          </figure>
          <div className="explore-our-works__content__item__overlay">
            <h2>Some text...</h2>
          </div>
        </div>
      </article>
      {/* Button component */}
    </section>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     kk: state.haha,
//   };
// };
export default connect()(ExploreOurWorks);
