import React from "react";
import "./styles.scss";
const ExploreWorkItem = (props) => {
  return (
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
  );
};

export default ExploreWorkItem;
