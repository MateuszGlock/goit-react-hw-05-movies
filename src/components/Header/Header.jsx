import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles.css";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/movies"
          className={`nav-link ${location.pathname === "/movies" ? "active" : ""}`}>
          Movies
        </Link>
      </nav>
    </header>
  );
};

export default Header;
