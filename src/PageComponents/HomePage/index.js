import React from "react";
import AboutUs from "../../Components/AboutUs";
import CoolMenu from "../../Components/CoolMenu";
import ExploreOurWorks from "../../Components/ExploreOurWorks";
import Footer from "../../Components/Footer";
import LargeHero from "../../Components/LargeHero";
import MeetTeam from "../../Components/MeetTeam";
import Navbar from "../../Components/Navbar";
import WhatWeDo from "../../Components/WhatWeDo";

function HomePage() {
  return (
    <div>
      <Navbar />
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

export default HomePage;
