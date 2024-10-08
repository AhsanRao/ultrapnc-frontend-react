// src/components/home/Video/Video.jsx
import React, { useEffect } from "react";
import GLightbox from "glightbox";

const Video = () => {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox.video",
      autoplayVideos: true,
      width: 900,
    });

    // Cleanup on unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="intro-video-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-content-head">
              <div className="inner-content">
                {/* Decorative Shapes */}
                <img
                  className="shape1"
                  src="/assets/images/video/shape1.svg"
                  alt="Shape1"
                />
                <img
                  className="shape2"
                  src="/assets/images/video/shape2.svg"
                  alt="Shape2"
                />

                {/* Section Title */}
                <div className="section-title">
                  <span className="wow zoomIn" data-wow-delay=".2s">
                    Create your own experience
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Watch Our intro video
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>

                {/* Video Play Button */}
                <div className="intro-video-play">
                  <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                      className="glightbox video"
                      aria-label="Watch Intro Video"
                    >
                      <i className="lni lni-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
