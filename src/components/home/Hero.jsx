// src/components/home/Hero/Hero.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import { motion } from "framer-motion";

const Hero = () => {
  const typedTextRef = useRef(null);
  // const particlesRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedTextRef.current, {
      strings: ["Modern Lifestyle", "Creative GIS", "Flask Application"],
      typeSpeed: 70,
      backSpeed: 35,
      loop: true,
      backDelay: 1000,
    });

    // Load particles.min.js
    const script = document.createElement("script");
    script.src = "./assets/js/particles.min.js";
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-1", {
          particles: {
            number: {
              value: 40,
              density: {
                enable: !0,
                value_area: 4000,
              },
            },
            color: {
              value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 33,
                height: 33,
              },
            },
            opacity: {
              value: 0.15,
              random: !0,
              anim: {
                enable: !0,
                speed: 0.2,
                opacity_min: 0.15,
                sync: !1,
              },
            },
            size: {
              value: 50,
              random: !0,
              anim: {
                enable: !0,
                speed: 2,
                size_min: 5,
                sync: !1,
              },
            },
            line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 1,
              direction: "top",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !1,
                mode: "bubble",
              },
              onclick: {
                enable: !1,
                mode: "repulse",
              },
              resize: !0,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: !0,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      typed.destroy();
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="hero-area">
      <div id="particles-1" className="particles"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="hero-content">
              <h4>Creative App Landing Page</h4>
              <h1>
                Best app for your
                <br />
                <span ref={typedTextRef}></span>
              </h1>
              <p>
                Tomfoolery are you taking the piss cor blimey guvnor <br />
                do one bleeding young delinquent.
              </p>
              <div className="button">
                <a href="/about" className="btn">
                  Try for free
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="hero-image"
            >
              <img src="https://via.placeholder.com/700x1000" alt="Hero" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
