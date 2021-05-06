import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import bgImg from "../../assets/image/explore-bg.jpg";

import "./style.scss";
import { db } from "../../firebase";
import { withRouter } from "react-router";
import axios from "axios";
const ExploreOurWorks = (props) => {
  const [datas, setDatas] = useState([]);
  useEffect(async()=>{
    await axios.get("https://login-c6162-default-rtdb.asia-southeast1.firebasedatabase.app/filters.json").then(result=>{
      const arr = Object.entries(result.data)
      console.log(arr);
      setDatas([...arr])
    }).catch(err=>{
      console.log(err);
    })
  },[])
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
        {datas.map((data) => (
          <ExploreWorkItem
            path={`/filters/${data[1].id}`}
            key={data[1].id}
            filter={data[1]}
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

export default withRouter(ExploreOurWorks);
