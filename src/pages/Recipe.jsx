import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Category from "../components/Category/Category";
import Recipes from "../components/Recipes/Recipes";

const Recipe = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Recipes />
    </>
  );
};

export default Recipe;
