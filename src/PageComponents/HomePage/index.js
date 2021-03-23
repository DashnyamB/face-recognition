import React from "react";
import ExploreOurWorks from "../../Components/ExploreOurWorks";
import Footer from "../../Components/Footer";
import LargeHero from "../../Components/LargeHero";
import Navbar from "../../Components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <LargeHero />
      <ExploreOurWorks />
      <Footer />
    </div>
  );
}

export default HomePage;
