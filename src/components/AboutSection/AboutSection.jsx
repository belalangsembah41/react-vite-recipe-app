import React from "react";
import AboutImg from "../../assets/about.png";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h2>
          Discover <br />
          <span className="subtitle">Our Story</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          asperiores illo repudiandae cum similique voluptate nesciunt vero?
          Provident ea obcaecati consequuntur. Dolorum animi optio deserunt, ea
          beatae officia sed fuga asperiores accusamus? Ipsa vero quaerat nam,
          sint optio excepturi doloremque beatae quia nostrum blanditiis maiores
          dolor modi provident ab temporibus.
        </p>
        <a href="#">About Us</a>
      </div>
      <div className="about-img">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
