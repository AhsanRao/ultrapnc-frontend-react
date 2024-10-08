import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-12">
                <div className="single-footer f-about">
                  <div className="logo">
                    <Link to="/">
                      <img src="/assets/images/logo/pnclogowhite.svg" alt="#" />
                    </Link>
                  </div>
                  <p>
                    Making the world a better place through constructing <br />{" "}
                    elegant hierarchies. Making the world.
                  </p>
                  <h4 className="social-title">Follow Us On:</h4>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Marketing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Analytics</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Commerce</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Insights</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Pricing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Documentation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Guides</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">API Status</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-text">
                  © 2024 AnAchar - All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-owner">
                  Designed and Developed by{" "}
                  <a
                    href="https://github.com/AhsanRao"
                    rel="nofollow"
                    target="_blank"
                  >
                    ash ❦
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
