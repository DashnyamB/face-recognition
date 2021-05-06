import React, { useRef, useState } from "react";
import LargeHero from "../../Components/LargeHero";
import Navbar from "../../Components/Navbar";
import bg from "../../assets/video/Filterpage.mp4";
import CoolMenu from "../../Components/CoolMenu";
import Filters from "../../Components/Filters";
import Footer from "../../Components/Footer";

const FiltersPage = () => {
  const navbarRef = useRef();
  const [refs, setRefs] = useState({})
  return (
    <section>
      <Navbar references={refs} />
      <CoolMenu />
      <LargeHero
        bg={bg}
        type="video"
        title="explore our filters"
        style="narrow"
        subtitle="Our website offers you various choice of filters and a lot of choices you can have."
      />
      <Filters />
      <Footer />
    </section>
  );
};

export default FiltersPage;
