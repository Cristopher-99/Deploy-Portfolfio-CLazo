import React, { useState, useEffect } from "react";
import "./Scroll.css";
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Verifica la posición de desplazamiento y ajusta la visibilidad del botón
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 500);
  };

  useEffect(() => {
    // Agrega el listener al evento de scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar/desmontar el componente

  return (
    <div>
      {isVisible && (
        <button className="btn btn-primary scrollTop" onClick={scrollToTop}>
          <i className="bi bi-caret-up-fill h4" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
