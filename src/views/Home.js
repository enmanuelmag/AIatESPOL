import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
//import FeaturesTiles from '../components/sections/FeaturesTiles';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      <Projects invertMobile topDivider imageFill className="illustration-section-02" />
      <Team topDivider />
      <Cta split />
    </>
  );
}

export default Home;