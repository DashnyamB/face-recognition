import React, { useEffect, useRef, useState } from "react";
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
import bg from "../../assets/image/largehero-bg.jpg";
import "./style.scss";
import MobileMenu from "../../Components/MobileMenu";
function HomePage({ userId }) {
  const navbarRef = useRef();
  const [refs, setRefs] = useState({})

  const refHandler = (ref, name) => {
    setRefs(prevState => ({
      ...prevState,
      [name]: ref.current
    }));
  }

  useEffect(() => {
  }, [refs]);
  return (
    <div>
      {!userId ? <Redirect to="/login" /> : ""}
      <div ref={navbarRef}>
        <Navbar ref={navbarRef} references={refs} />
      </div>
      <CoolMenu />
      <MobileMenu />
      <LargeHero
        bg={bg}
        title="facial recognition"
        subtitle="better performance - responsible - design and development"
      />
      <AboutUs />
      <WhatWeDo refHandler={refHandler} />
      <ExploreOurWorks />
      <MeetTeam refHandler={refHandler} />
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
