import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h4>Recipe App</h4>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href={`/`} className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href={`/recipe`} className="nav-link">
            Recipe
          </a>
        </li>
        <li className="nav-item">
          <a href={`/about`} className="nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
