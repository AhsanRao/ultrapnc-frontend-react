// src/pages/Home.jsx
import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Services from "../components/home/Services";
import Pricing from "../components/home/Pricing";
import Video from "../components/home/Video";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Video />
      <Team />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
