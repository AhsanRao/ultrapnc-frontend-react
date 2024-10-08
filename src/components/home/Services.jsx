// src/components/home/Services/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "lni lni-grid-alt",
      title: "Brand Identity Design",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
    {
      icon: "lni lni-keyword-research",
      title: "Digital Marketing",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
    {
      icon: "lni lni-vector",
      title: "Design and Development",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
    {
      icon: "lni lni-book",
      title: "IT Consulting Service",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
    {
      icon: "lni lni-cloud-network",
      title: "Cloud Computing",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
    {
      icon: "lni lni-display-alt",
      title: "Graphics Design",
      description:
        "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
    },
  ];

  return (
    <div className="services section">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                What we offer
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Services
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        {/* Services List */}
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-12 wow fadeInUp`}
              data-wow-delay={`.${2 + index * 2}s`}
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-title">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
