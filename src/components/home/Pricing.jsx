// src/components/home/Pricing/Pricing.jsx
import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Individual",
      subtitle: "Powerful & Awesome Elements",
      price: "19",
      duration: "/month",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "01 Domain Support",
        { name: "6 Month Premium Support", disabled: true },
        { name: "Lifetime Updates", disabled: true },
      ],
      popular: false,
      buttonText: "Start free trial",
      buttonAlt: false,
    },
    {
      title: "Exclusive",
      subtitle: "Powerful & Awesome Elements",
      price: "49",
      duration: "/month",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "01 Domain Support",
        "6 Month Premium Support",
        { name: "Lifetime Updates", disabled: true },
      ],
      popular: true,
      buttonText: "Start free trial",
      buttonAlt: true,
    },
    {
      title: "Premium",
      subtitle: "Powerful & Awesome Elements",
      price: "99",
      duration: "/month",
      features: [
        "Commercial License",
        "100+ HTML UI Elements",
        "01 Domain Support",
        "6 Month Premium Support",
        "Lifetime Updates",
      ],
      popular: false,
      buttonText: "Start free trial",
      buttonAlt: false,
    },
  ];

  return (
    <section id="pricing" className="pricing-table section">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                pricing
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Pricing & Plans
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        {/* Pricing Plans */}
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-12 wow fadeInUp`}
              data-wow-delay={`.${4 + index * 2}s`}
            >
              <div className={`single-table ${plan.popular ? "middle" : ""}`}>
                {/* Popular Badge */}
                {plan.popular && <span className="popular">Most Popular</span>}
                {/* Table Head */}
                <div className="table-head">
                  <h4 className="title">{plan.title}</h4>
                  <p className="sub-title">{plan.subtitle}</p>
                  <div className="price">
                    <h2 className="amount">
                      <span className="currency">$</span>
                      {plan.price}
                      <span className="duration">{plan.duration}</span>
                    </h2>
                  </div>
                </div>
                {/* Table Content */}
                <div className="table-content">
                  <ul className="table-list">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={feature.disabled ? "disable" : ""}
                      >
                        {feature.name ? feature.name : feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Button */}
                <div className="button">
                  <a
                    href="#"
                    className={`btn ${plan.buttonAlt ? "btn-alt" : ""}`}
                  >
                    {plan.buttonText} <i className="lni lni-arrow-right"></i>
                  </a>
                </div>
                <p className="no-card">No credit card required</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
