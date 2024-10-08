// src/pages/MailSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MailSuccess = () => {
  return (
    <>
      
      {/* Start Mail Success Area */}
      <div className="maill-success">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="success-content">
                <h1>Awesome!</h1>
                <p>Your message sent successfully, We will <br /> get back to you asap.</p>
                <div className="button">
                  <Link to="/" className="btn">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Mail Success Area */}
      
    </>
  );
};

export default MailSuccess;
