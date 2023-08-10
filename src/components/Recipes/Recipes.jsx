import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
        );
        setRecipes(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="recipes-container">
      {recipes.map((recipe) => {
        let recipeId = recipe.idMeal;

        return (
          <div className="card" key={recipeId}>
            <img src={recipe.strMealThumb} alt="" />
            <a href={`/recipe/Breakfast/${recipeId}`}>{recipe.strMeal}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
