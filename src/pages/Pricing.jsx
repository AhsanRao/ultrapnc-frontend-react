// src/pages/Pricing.jsx
import React from "react";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import Breadcrumbs from "../components/common/Breadcrumbs";

const PricingPage = () => {
  return (
    <>
      <Breadcrumbs />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default PricingPage;
