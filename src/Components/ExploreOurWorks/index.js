import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import bgImg from "../../assets/image/explore-bg.jpg";

import "./style.scss";
import { db } from "../../firebase";
import { withRouter } from "react-router";
const ExploreOurWorks = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    db.collection("filters").onSnapshot((snapshot) => {
      setDatas(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const jumpToFilters = () => {
    props.history.push("/filters");
  };

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
        {props.datas.map((data) => (
          <ExploreWorkItem
            path={`/filters/${data.id}`}
            key={data.timestamp}
            filter={data}
          />
        ))}
      </article>
      {/* Button component */}
      <div className="explore-our-works__btn">
        <Button
          onClick={jumpToFilters}
          text="Explore our work"
          type="outline"
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.filterReducer.filters,
  };
};
export default connect(mapStateToProps)(withRouter(ExploreOurWorks));
