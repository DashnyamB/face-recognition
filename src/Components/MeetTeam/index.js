import React from "react";
import "./style.scss";
const MeetTeam = () => {
  return (
    <section className="meet-team wrapper">
      <article className="meet-team__content">
        <h1 className="meet-team__content__header">Meet The Team</h1>
        <h3>#TeamMatrix</h3>
        <h2>
          We are students of National University of Mongolia, majoring in
          Information Technology
        </h2>
        <div className="up-line"></div>
        <h3>#TeamMembers</h3>
        <div className="meet-team__content__members">
          <p>Dashnyam Bayarsaikhan</p>
          <p>Sainzolboo Anujin</p>
          <p>Ganbayar Bayanmunkh</p>
          <p>Gantug Gangerel</p>
        </div>
        <hr />
        <h3>#lifeatmatrix</h3>
      </article>
    </section>
  );
};

export default MeetTeam;
