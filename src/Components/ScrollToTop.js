import React, { useState, useEffect } from "react";
import upArrow from "../Images/upArrow2.svg"; // <-- your arrow image path

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img src={upArrow} alt="Scroll to top" className="up-arrow" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
