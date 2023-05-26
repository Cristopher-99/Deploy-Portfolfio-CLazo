import React from "react";
import "./Scroll.css";
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="btn btn-primary scrollTop " onClick={scrollToTop}>
        <i class="bi bi-caret-up-fill h4"></i>{" "}
      </button>
    </div>
  );
};

export default ScrollToTopButton;
