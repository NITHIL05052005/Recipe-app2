import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ meal }) {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div className="border rounded-lg shadow hover:scale-105 transition p-2">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded"/>
        <h3 className="text-lg font-bold mt-2">{meal.strMeal}</h3>
      </div>
    </Link>
  );
}

export default RecipeCard;
