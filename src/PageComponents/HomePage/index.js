import React from "react";
import ExploreOurWorks from "../../Components/ExploreOurWorks";
import LargeHero from "../../Components/LargeHero";
import Navbar from "../../Components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <LargeHero />
      <ExploreOurWorks />
    </div>
  );
}

export default HomePage;
