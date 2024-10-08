// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';

import { Link, useNavigate } from 'react-router-dom';
import { notifySuccess, notifyError } from '../components/common/Notification';

const ResetPassword = () => {
  const navigate = useNavigate();

  // State for form input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      notifySuccess('Reset link sent to your email!');
      navigate('/mail-success'); // Redirect to Mail Success
    } else {
      notifyError('Please enter a valid email address.');
    }
  };

  return (
    <>

      <Breadcrumbs />

      {/* Start Reset Password Area */}
      <div className="account-login section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 col-12">
              <form className="card login-form inner-content" onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="title">
                    <h3>Reset Password</h3>
                    <p>Need to reset your password? No problem! Just enter your email & click the button below.</p>
                  </div>
                  <div className="input-head">
                    <div className="form-group input-group">
                      <label htmlFor="reset-email"><i className="lni lni-envelope"></i></label>
                      <input
                        className="form-control"
                        type="email"
                        id="reset-email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <button className="btn" type="submit">Send Reset Link</button>
                  </div>
                  <h4 className="create-account">
                    Login to your account <Link to="/signin">Click here</Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Reset Password Area */}

    </>
  );
};

export default ResetPassword;
