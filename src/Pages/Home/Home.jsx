import React from "react";
import Banner from "./Banner";
import FeaturedHabits from "./FeaturedHabits";
import WhyBuildHabits from "./WhyBuildHabits";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedHabits />
      <WhyBuildHabits />
      <ExtraSection1/>
      <ExtraSection2 />
    </div>
  );
};

export default Home;
