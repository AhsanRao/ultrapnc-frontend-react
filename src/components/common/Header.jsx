import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(
    "/assets/images/logo/pnclogowhite.svg"
  );

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-area");
      const sticky = navbar.offsetTop;

      if (window.pageYOffset > sticky) {
        setIsSticky(true);
        setLogoSrc("/assets/images/logo/pnclogo.svg");
      } else {
        setIsSticky(false);
        setLogoSrc("/assets/images/logo/pnclogowhite.svg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header navbar-area ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
                <button
                  className={`navbar-toggler border-0 mobile-menu-btn ${
                    isMenuOpen ? "active" : ""
                  }`}
                  type="button"
                  onClick={toggleMenu}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse sub-menu-bar ${
                    isMenuOpen ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/" className="active">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="button home-btn">
                  {user ? (
                    <div ref={userMenuRef} style={{ position: "relative" }}>
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#333",
                        }}
                      >
                        <User size={24} />
                      </button>
                      {isUserMenuOpen && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            right: "0",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            padding: "12px",
                            minWidth: "200px",
                            zIndex: 1000,
                          }}
                        >
                          <div
                            style={{
                              borderBottom: "1px solid #eee",
                              padding: "8px",
                              marginBottom: "8px",
                            }}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              {user.username}
                            </span>
                          </div>
                          <Link
                            to="/dashboard"
                            className="dropdown-item"
                            style={{
                              display: "block",
                              padding: "8px 12px",
                              color: "#333",
                              textDecoration: "none",
                              borderRadius: "4px",
                              transition: "background-color 0.2s",
                              display: "flex",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.backgroundColor = "#f0f0f0")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor = "transparent")
                            }
                          >
                            <i
                              className="lni lni-dashboard"
                              style={{ marginRight: "10px" }}
                            ></i>{" "}
                            Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            style={{
                              display: "block",
                              padding: "8px 12px",
                              color: "#333",
                              width: "100%",
                              textAlign: "left",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              borderRadius: "4px",
                              transition: "background-color 0.2s",
                              display: "flex",
                              alignItems: "center",
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.backgroundColor = "#f0f0f0")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor = "transparent")
                            }
                          >
                            <i
                              className="lni lni-exit"
                              style={{ marginRight: "10px" }}
                            ></i>{" "}
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to="/signup" className="btn">
                      Get Started
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
