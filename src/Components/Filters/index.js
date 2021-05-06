import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Button from "../Button";
import ExploreWorkItem from "../ExploreWorkItem";
import "./style.scss";
const Filters = (props) => {
  const [datas, setDatas]= useState([])
  useEffect(async()=>{
    await axios.get("https://login-c6162-default-rtdb.asia-southeast1.firebasedatabase.app/filters.json").then(result=>{
      const arr = Object.entries(result.data)
      console.log(arr);
      setDatas([...arr])
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <section className="filters wrapper">
      {datas.map((filter) => {
        return (
          <article key={filter[1].id} className="filters__item">
            <h2>{filter[1].name}</h2>
            <div className="filters__item__content">
              <div className="filters__item__media">
                <ExploreWorkItem
                  path={`/filters/${filter[1].id}`}
               
                  filter={filter[1]}
                />
              </div>
              <div className="filters__item__description">
                <p>{filter[1].description}</p>
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


export default (Filters);
