// src/components/home/Testimonials/Testimonials.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      text: "“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”",
      name: "Somalia D Silva",
      role: "Business Manager",
      image: "https://via.placeholder.com/100x100",
    },
    {
      text: "“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”",
      name: "David Warner",
      role: "Web Developer",
      image: "https://via.placeholder.com/100x100",
    },
    {
      text: "“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”",
      name: "Jems Gilario",
      role: "Graphics Designer",
      image: "https://via.placeholder.com/100x100",
    },
    {
      text: "“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”",
      name: "David Warner",
      role: "Web Developer",
      image: "https://via.placeholder.com/100x100",
    },
    {
      text: "“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”",
      name: "Jems Gilario",
      role: "Graphics Designer",
      image: "https://via.placeholder.com/100x100",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slideBy: "page",
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // Number of testimonials to show at once
    slidesToScroll: 1,
    mouseDrag: true,
    responsive: [
      {
        breakpoint: 992, // screens less than 992px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // screens less than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialStyle = {
    margin: "10px",
  };

  return (
    <section className="testimonials style2 section">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Customer Reviews
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Testimonials
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="row testimonial-slider">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-6 col-12" key={index}>
                {/* Single Testimonial */}
                <div className="single-testimonial" style={testimonialStyle}>
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="author">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <h4 className="name">
                        {testimonial.name}
                        <span className="deg">{testimonial.role}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* End Single Testimonial */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
