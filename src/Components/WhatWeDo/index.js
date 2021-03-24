import React, { useState } from "react";
import "./style.scss";
const WhatWeDo = () => {
  const [contents, setContent] = useState([
    {
      name: "team plan",
      img:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fa1.png?alt=media&token=8fbf7ac2-3d82-496c-ac07-f68454fd8906",
      desc: "Each member of our team plan their every step to reach goal.",
      id: 1,
    },
    {
      name: "team discuss",
      img:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fa2.png?alt=media&token=24d93e0e-8c48-4e0c-9ace-508ec83ad70b",
      desc:
        "We all discuss about the purpose and answer the question such as where, when and how.",
      id: 2,
    },
    {
      name: "team show",
      img:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fa3.png?alt=media&token=10d0785e-a0ce-42b2-bca6-49e82f206b58",
      desc:
        "We give a little taste to the people as a show and represent what doing during this time.",
      id: 3,
    },
    {
      name: "team application",
      img:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fa4.png?alt=media&token=fd530d8a-4f88-49af-b3e3-42c951d11c8d",
      desc: "It's our time to deploy our brand new application to the public.",
      id: 2,
    },
  ]);
  return (
    <section className="what-we-do wrapper">
      <div className="what-we-do__horizontal-line"></div>
      <h1 className="what-we-do wrapper__header">What we do</h1>
      <div className="what-we-do__content wrapper">
        {contents.map((content) => {
          return (
            <div key={content.id}>
              <figure>
                <img src={content.img} alt={content.name} />
              </figure>
              <h1>{content.name}</h1>
              <p>{content.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
