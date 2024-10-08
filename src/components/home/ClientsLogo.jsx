// src/components/home/ClientsLogo/ClientsLogo.jsx
import React from 'react';

const ClientsLogo = () => {
  const clientLogos = [
    'https://via.placeholder.com/200x100',
    'https://via.placeholder.com/200x100',
    'https://via.placeholder.com/200x100',
    'https://via.placeholder.com/200x100',
  ];

  return (
    <div className="client-logo">
      <div className="container">
        <div className="row align-items-center">
          {clientLogos.map((logo, index) => (
            <div className="col-lg-3 col-md-3 col-12 text-center" key={index}>
              <div className="single-logo">
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;
