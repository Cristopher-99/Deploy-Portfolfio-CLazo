import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Hola soy la landing page</h1>
      <button>
        <Link to="/contact"> iniciar </Link>
      </button>
    </div>
  );
};

export default Landing;
