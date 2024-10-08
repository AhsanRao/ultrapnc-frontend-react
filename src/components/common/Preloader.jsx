// src/components/common/Preloader/Preloader.jsx
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for the window load event
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
