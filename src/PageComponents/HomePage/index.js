import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import AboutUs from "../../Components/AboutUs";
import CoolMenu from "../../Components/CoolMenu";
import ExploreOurWorks from "../../Components/ExploreOurWorks";
import Footer from "../../Components/Footer";
import LargeHero from "../../Components/LargeHero";
import MeetTeam from "../../Components/MeetTeam";
import Navbar from "../../Components/Navbar";
import WhatWeDo from "../../Components/WhatWeDo";
import "./style.scss";
function HomePage({ userId }) {
  const navbarRef = useRef();
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      {!userId ? <Redirect to="/login" /> : ""}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      <CoolMenu />
      <LargeHero />
      <AboutUs />
      <WhatWeDo />
      <ExploreOurWorks />
      <MeetTeam />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userId: state.LoginRegisterReducer.user.uid,
  };
};
export default connect(mapStateToProps)(HomePage);
