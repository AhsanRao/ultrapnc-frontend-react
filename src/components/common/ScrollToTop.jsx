// src/components/common/ScrollToTop/ScrollToTop.jsx
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by 50px
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") scrollToTop();
          }}
        >
          <i className="lni lni-chevron-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
