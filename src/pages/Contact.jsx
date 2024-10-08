// src/pages/Contact.jsx
import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";

const Contact = () => {
  return (
    <>
      <Breadcrumbs />
      {/* Start Contact Area */}
      <div className="contact-us section">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-6 col-12">
              <div className="contact-widget-wrapper">
                <div className="main-title">
                  <h2>Contact Us</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
                <div className="contact-widget-block">
                  <h3 className="title">Call us</h3>
                  <p>+14-394-409-591</p>
                </div>
                <div className="contact-widget-block">
                  <h3 className="title">Email us</h3>
                  <p>info@mail.com</p>
                  <p>support@mail.com</p>
                </div>
                <div className="contact-widget-block">
                  <h3 className="title">Our Address</h3>
                  <p>34 Madison Street,</p>
                  <p>NY, USA 10005</p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h3 className="form-title">Leave a message here</h3>
                <form className="form" method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone*"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          placeholder="Message*"
                          name="message"
                          id="message-area"
                          className="form-control"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="button">
                        <button type="submit" className="btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Area */}

      {/* Start Google-map Area */}
      <div className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Google-map Area */}
    </>
  );
};

export default Contact;
