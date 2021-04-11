import React from "react";
import "./styles.scss";
const ExploreWorkItem = (props) => {
  return (
    <div className="explore-our-works__content__item">
      <figure className="explore-our-works__content__item__img">
        <img src={props.filter.media} alt={props.filter.name} />
      </figure>
      <div className="explore-our-works__content__item__overlay">
        <h2>{props.filter.name}</h2>
      </div>
    </div>
  );
};

export default ExploreWorkItem;
