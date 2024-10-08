import React, { useState } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { notifySuccess, notifyError } from "../components/common/Notification";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords don't match" });
      setIsLoading(false);
      notifyError("Passwords don't match");
      return;
    }

    try {
      await register(email, name, password);
      notifySuccess("Account created!");
      navigate("/signin");
    } catch (error) {
      if (typeof error === "object" && error !== null) {
        setErrors(error);
        displayErrorNotifications(error);
      } else {
        notifyError("Signup failed. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const displayErrorNotifications = (errors) => {
    Object.entries(errors).forEach(([field, message]) => {
      let customMessage = message;
      switch (field) {
        case "email":
          customMessage = message.includes("already exists")
            ? "Email already registered."
            : message;
          notifyError(customMessage);
          break;
        case "username":
          customMessage = message.includes("already exists")
            ? "Username taken."
            : message.includes("valid username")
            ? "Invalid username format."
            : message;
          notifyError(customMessage);
          break;
        case "password":
          if (Array.isArray(message)) {
            message.forEach((msg) => notifyError(msg));
          } else {
            notifyError(message);
          }
          break;
        case "non_field_errors":
          if (Array.isArray(message)) {
            message.forEach((msg) => notifyError(msg));
          } else {
            notifyError(message);
          }
          break;
        default:
          notifyError(message);
          break;
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const inputGroupStyle = {
    position: "relative",
  };

  const toggleButtonStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 10,
    color: "#6B6E73",
  };

  const errorTextStyle = {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  };

  const errorInputStyle = {
    borderColor: "red",
  };

  return (
    <>
      <Breadcrumbs />
      <div className="account-login section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 col-12">
              <form
                className="card login-form inner-content"
                onSubmit={handleSubmit}
              >
                <div className="card-body">
                  <div className="title">
                    <h3>Sign Up Now</h3>
                    <p>Use the form below to create your account.</p>
                  </div>
                  <div className="input-head">
                    <div className="form-group input-group">
                      <label htmlFor="sign-up-name">
                        <i className="lni lni-user"></i>
                      </label>
                      <input
                        className={`form-control ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        type="text"
                        id="sign-up-name"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={errors.username ? errorInputStyle : {}}
                      />
                      {errors.username && (
                        <div style={errorTextStyle}>{errors.username}</div>
                      )}
                    </div>
                    <div className="form-group input-group">
                      <label htmlFor="sign-up-email">
                        <i className="lni lni-envelope"></i>
                      </label>
                      <input
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        type="email"
                        id="sign-up-email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={errors.email ? errorInputStyle : {}}
                      />
                      {errors.email && (
                        <div style={errorTextStyle}>{errors.email}</div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div
                          className="form-group input-group"
                          style={inputGroupStyle}
                        > <label htmlFor="sign-in-password">
                        <i className="lni lni-lock-alt"></i>
                      </label>
                          <input
                            className={`form-control ${
                              errors.password || errors.non_field_errors
                                ? "is-invalid"
                                : ""
                            }`}
                            type={showPassword ? "text" : "password"}
                            id="sign-up-password"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={
                              errors.password || errors.non_field_errors
                                ? errorInputStyle
                                : {}
                            }
                          />
                          <button
                            type="button"
                            style={toggleButtonStyle}
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                        {errors.password &&
                          (Array.isArray(errors.password) ? (
                            errors.password.map((error, index) => (
                              <div key={index} style={errorTextStyle}>
                                {error}
                              </div>
                            ))
                          ) : (
                            <div style={errorTextStyle}>{errors.password}</div>
                          ))}
                        {errors.non_field_errors &&
                          (Array.isArray(errors.non_field_errors) ? (
                            errors.non_field_errors.map((error, index) => (
                              <div key={index} style={errorTextStyle}>
                                {error}
                              </div>
                            ))
                          ) : (
                            <div style={errorTextStyle}>
                              {errors.non_field_errors}
                            </div>
                          ))}
                      </div>
                      <div className="col-lg-6 col-12">
                        <div
                          className="form-group input-group"
                          style={inputGroupStyle}
                        > <label htmlFor="sign-in-password">
                        <i className="lni lni-lock-alt"></i>
                      </label>
                          <input
                            className={`form-control ${
                              errors.confirmPassword ? "is-invalid" : ""
                            }`}
                            type={showConfirmPassword ? "text" : "password"}
                            id="sign-up-confirm-password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={
                              errors.confirmPassword ? errorInputStyle : {}
                            }
                          />
                          <button
                            type="button"
                            style={toggleButtonStyle}
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {showConfirmPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <div style={errorTextStyle}>
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                  <h4 className="create-account">
                    Already have an account? <Link to="/signin">Sign In</Link>
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

export default SignUp;
