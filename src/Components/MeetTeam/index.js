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
          information technology
        </h2>
        <div className="meet-team__content__up-line"></div>
        <h3>#TeamMembers</h3>
        <div className="meet-team__content__members">
          <p>Dashnyam Bayarsaikhan, Information technology</p>
          <p>Sainzolboo Anujin, Information technology</p>
          <p>Ganbayar Bayanmunkh, Information technology</p>
          <p>Gantug Gangerel, Information technology</p>
        </div>
        <hr />
        <h3>#lifeatmatrix</h3>
      </article>
    </section>
  );
};

export default MeetTeam;
