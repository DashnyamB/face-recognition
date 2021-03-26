import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import bgImg from "../../assets/image/explore-bg.jpg";

import "./style.scss";
import axios from "axios";
import { db } from "../../firebase";
const ExploreOurWorks = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    db.collection("filters").onSnapshot((snapshot) => {
      setDatas(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
        {datas.map((data) => (
          <ExploreWorkItem key={data.timestamp} post={data} />
        ))}
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
