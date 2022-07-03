import React from "react";
import {
  AboutUs,
  BottomHeaderComponent,
  Hero,
  OurAdvisoryTeam,
  OurTeam,
} from "../components";
import { heroOne } from "../data/HeroData";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <AboutUs {...heroOne} />
      <OurTeam />
      <OurAdvisoryTeam />
      <BottomHeaderComponent />
    </React.Fragment>
  );
};

export default Home;
