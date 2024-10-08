// src/components/common/Breadcrumbs/Breadcrumbs.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into an array of path segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap = {
    "about-us": "About Us",
    pricing: "Our Pricing",
    signin: "Sign In",
    signup: "Sign Up",
    "reset-password": "Reset Password",
    "mail-success": "Mail Success",
    404: "404 Error",
    contact: "Contact",
    services: "Services",
  };

  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">
                {breadcrumbNameMap[pathnames[pathnames.length - 1]] || "Page"}
              </h1>
              <ul className="breadcrumb-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return isLast ? (
                    <li key={to}>{breadcrumbNameMap[value] || value}</li>
                  ) : (
                    <li key={to}>
                      <Link to={to}>{breadcrumbNameMap[value] || value}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
