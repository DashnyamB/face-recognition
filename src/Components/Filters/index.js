import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import "./style.scss";
const Filters = (props) => {
  return (
    <section className="filters wrapper">
      {console.log(props.filters)}
      {props.filters.map((filter) => {
        return (
          <article className="filters__item">
            <h2>{filter.name}</h2>
            <div className="filters__item__content">
              <div className="filters__item__media">
                <ExploreWorkItem key={filter.name} filter={filter} />
              </div>
              <div className="filters__item__description">
                <p>{filter.description}</p>
                <div className="filters__item__description__btn">
                  <Button type="outline" text="Check it out" />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filterReducer.filters,
  };
};
export default connect(mapStateToProps)(Filters);
