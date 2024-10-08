// src/pages/Services.jsx
import React from "react";
import Services from "../components/home/Services";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Video from "../components/home/Video";
import Testimonials from "../components/home/Testimonials";

const PricingPage = () => {
  return (
    <>
      <Breadcrumbs />
      <Services />
      <Video />
      <Testimonials />
    </>
  );
};

export default PricingPage;
