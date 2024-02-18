import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import ContactMe from "../components/ContactMe/ContactMe";


const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
    </React.Fragment>
  );
};

export default HomePage;
