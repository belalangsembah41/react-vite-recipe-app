import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Category from "../components/Category/Category";
import axios from "axios";
import "../styles/CategoryRecipe.css";

const CategoryRecipe = () => {
  const [listRecipe, setListRecipe] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );

        setListRecipe(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <Navbar />
      <Category />
      <div className="recipes-container">
        {listRecipe.map((recipe) => {
          let recipeId = recipe.idMeal;

          return (
            <div className="card" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt="" />
              <a href={`/recipe/${category}/${recipeId}`}>{recipe.strMeal}</a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryRecipe;
