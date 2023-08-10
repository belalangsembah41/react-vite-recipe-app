import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "../styles/DetailRecipe.css";

const DetailRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(res.data.meals);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <Navbar />
      {recipe.map((rec) => (
        <div className="container" key={rec.idMeal}>
          <div className="title">
            <div className="rec-img">
              <img src={rec.strMealThumb} alt="" />
            </div>
            <div className="rec-details">
              <h2>{rec.strMeal}</h2>
              <h3>Category: {rec.strCategory}</h3>
              <h3>Country: {rec.strArea}</h3>
              <h3>Tags: {rec.strTags}</h3>
              <h3>
                Tutorial:{" "}
                <a href={rec.strYoutube} target="_blank">
                  {rec.strYoutube}
                </a>
              </h3>
            </div>
          </div>
          <div className="ingredients">
            <h2>Ingredients</h2>
            <div className="ing-item">
              <ul className="ing-list">
                <li>{rec.strIngredient1}</li>
                <li>{rec.strIngredient2}</li>
                <li>{rec.strIngredient3}</li>
                <li>{rec.strIngredient4}</li>
                <li>{rec.strIngredient5}</li>
                <li>{rec.strIngredient6}</li>
                <li>{rec.strIngredient7}</li>
                <li>{rec.strIngredient8}</li>
                <li>{rec.strIngredient9}</li>
                <li>{rec.strIngredient10}</li>
                <li>{rec.strIngredient11}</li>
                <li>{rec.strIngredient12}</li>
                <li>{rec.strIngredient13}</li>
                <li>{rec.strIngredient14}</li>
                <li>{rec.strIngredient15}</li>
                <li>{rec.strIngredient16}</li>
                <li>{rec.strIngredient17}</li>
                <li>{rec.strIngredient18}</li>
                <li>{rec.strIngredient19}</li>
                <li>{rec.strIngredient20}</li>
              </ul>
              <ul className="ing-list-meas">
                <li>{rec.strMeasure1}</li>
                <li>{rec.strMeasure2}</li>
                <li>{rec.strMeasure3}</li>
                <li>{rec.strMeasure4}</li>
                <li>{rec.strMeasure5}</li>
                <li>{rec.strMeasure6}</li>
                <li>{rec.strMeasure7}</li>
                <li>{rec.strMeasure8}</li>
                <li>{rec.strMeasure9}</li>
                <li>{rec.strMeasure10}</li>
                <li>{rec.strMeasure11}</li>
                <li>{rec.strMeasure12}</li>
                <li>{rec.strMeasure13}</li>
                <li>{rec.strMeasure14}</li>
                <li>{rec.strMeasure15}</li>
                <li>{rec.strMeasure16}</li>
                <li>{rec.strMeasure17}</li>
                <li>{rec.strMeasure18}</li>
                <li>{rec.strMeasure19}</li>
                <li>{rec.strMeasure20}</li>
              </ul>
            </div>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <p>{rec.strInstructions}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailRecipe;
