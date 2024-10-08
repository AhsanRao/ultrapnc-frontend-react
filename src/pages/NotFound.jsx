// src/pages/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <h1>404</h1>
                <h2>
                  The page you were looking for
                  <br /> doesn't exist anymore.
                </h2>
                <p>It might have been moved or deleted.</p>
                <div className="button">
                  <a href="/" className="btn">
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
