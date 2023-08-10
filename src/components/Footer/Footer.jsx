import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">
        <h2>Recipe App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque
          neque distinctio culpa accusantium explicabo numquam quaerat
          repudiandae earum enim! Ipsam fugiat placeat reiciendis sed.
        </p>
      </div>
      <div className="footer-menu">
        <h2>Our Menu</h2>
        <div className="cat">
          <ul className="ing">
            <li>
              <a href="#">Beef</a>
            </li>
            <li>
              <a href="#">Chicken</a>
            </li>
            <li>
              <a href="#">Seafood</a>
            </li>
            <li>
              <a href="#">Vegan</a>
            </li>
          </ul>
          <ul className="meals">
            <li>
              <a href="#">Breakfast</a>
            </li>
            <li>
              <a href="#">Lunch</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-team">
        <h2>Our Team</h2>
        <p>About Us</p>
      </div>
    </footer>
  );
};

export default Footer;
