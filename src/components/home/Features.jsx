// src/components/home/Features/Features.jsx
import React from "react";

const Features = () => {
  return (
    <section className="freatures section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 col-12">
            <div className="image wow fadeInLeft" data-wow-delay=".3s">
              <img src="https://via.placeholder.com/665x790" alt="Features" />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 col-12">
            <div className="content">
              <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                <span>Core Features</span> Designed & built by
                <br />
                the latest code integration
              </h3>

              {/* Single Feature */}
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="f-icon">
                  <i className="lni lni-dashboard"></i>
                </div>
                <h4>Fast performance</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}

              {/* Single Feature */}
              <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                <div className="f-icon">
                  <i className="lni lni-pencil-alt"></i>
                </div>
                <h4>Prototyping</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}

              {/* Single Feature */}
              <div className="single-feature wow fadeInUp" data-wow-delay=".8s">
                <div className="f-icon">
                  <i className="lni lni-vector"></i>
                </div>
                <h4>Vector Editing</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
