import React, { useEffect } from 'react';
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      // This value should be the vertical position where your second component starts.
      // Adjust it based on the actual layout of your page.
      const positionToShow = 600;
      if (window.scrollY >= positionToShow) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect will only run once

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a href="#" className="scrollup" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
