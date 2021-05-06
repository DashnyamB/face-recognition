import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import "./style.scss";
const Filters = (props) => {
  return (
    <section className="filters wrapper">
      {props.filters.map((filter) => {
        return (
          <article className="filters__item">
            <h2>{filter.name}</h2>
            <div className="filters__item__content">
              <div className="filters__item__media">
                <ExploreWorkItem
                  path={`/filters/${filter.id}`}
                  key={filter.name}
                  filter={filter}
                />
              </div>
              <div className="filters__item__description">
                <p>{filter.description}</p>
                <div className="filters__item__description__btn">
                  <Link to={`/filters/${filter.id}`}>
                    <Button type="outline" text="Check it out" />
                  </Link>
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
