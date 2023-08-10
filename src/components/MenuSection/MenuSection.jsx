import React from "react";
import MenuImg from "../../assets/menu.png";
import "./MenuSection.css";

const MenuSection = () => {
  return (
    <div className="menu-container">
      <div className="menu-title">
        <h2>
          Tasteful <br />
          <span className="subtitle">Meals</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vitae
          officiis. Aliquam tempore reprehenderit doloribus perferendis
          repellendus fuga itaque illo modi, saepe earum eos amet iste, facere
          recusandae ut vero maiores tenetur! Ea placeat rerum, ipsum facilis,
          illum sint tempora impedit harum exercitationem sit in eum consequatur
          minus natus! Fugit!
        </p>
        <a href={`/recipe`}>Our Menu</a>
      </div>
      <div className="menu-img">
        <img src={MenuImg} alt="" />
      </div>
    </div>
  );
};

export default MenuSection;
