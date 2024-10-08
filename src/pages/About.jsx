// src/pages/About.jsx
import React from "react";
import Features from "../components/home/Features";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ClientsLogo from "../components/home/ClientsLogo";

const About = () => {
  return (
    <>
      <Breadcrumbs />
      <Features />
      <Testimonials />
      <Team />
      <ClientsLogo />
    </>
  );
};

export default About;
