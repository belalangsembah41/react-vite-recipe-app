import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        const catNum = res.data.meals;
        for (let i = 0; i < catNum.length; i++) {
          catNum[i].strId = i;
        }

        setCategory(catNum);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="category">
      {category.map((cat) => {
        return (
          <a
            key={cat.strId}
            className="cat-item"
            href={`/recipe/${cat.strCategory}`}
          >
            {cat.strCategory}
          </a>
        );
      })}
    </div>
  );
};

export default Category;
