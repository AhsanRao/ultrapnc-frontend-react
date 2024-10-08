import React, { useState } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { notifySuccess, notifyError } from "../components/common/Notification";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      notifySuccess("Successfully signed in!");
      navigate("/dashboard");
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error) => {
    if (error.response && error.response.data) {
      if (error.response.data.error) {
        const errorMessage = getErrorMessage(error.response.data.error);
        notifyError(errorMessage);
      } else if (error.response.data.errors) {
        Object.values(error.response.data.errors).forEach(err => {
          notifyError(getErrorMessage(err[0]));
        });
      }
    } else {
      notifyError("An error occurred during signin.");
    }
  };

  const getErrorMessage = (error) => {
    switch (error) {
      case "No active account found with the given credentials":
        return "Invalid email or password. Please try again.";
      default:
        return error;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputGroupStyle = {
    position: 'relative',
  };

  const toggleButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10,
    color: '#6B6E73',
  };

  return (
    <>
      <Breadcrumbs />
      <div className="account-login section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <form
                className="card login-form inner-content"
                onSubmit={handleSubmit}
              >
                <div className="card-body">
                  <div className="title">
                    <h3>Sign In Now</h3>
                    <p>Sign in by entering the information below.</p>
                  </div>
                  
                  <div className="input-head">
                    <div className="form-group input-group">
                      <label htmlFor="sign-in-email">
                        <i className="lni lni-envelope"></i>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="sign-in-email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group input-group" style={inputGroupStyle}>
                      <label htmlFor="sign-in-password">
                        <i className="lni lni-lock-alt"></i>
                      </label>
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        id="sign-in-password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        style={toggleButtonStyle}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between bottom-content">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        // To Do: Implement remember me functionality
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <Link to="/reset-password" className="lost-pass">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit" disabled={isLoading}>
                      {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                  <h4 className="create-account">
                    Don't have an account?{" "}
                    <Link to="/signup">Sign Up Here</Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;