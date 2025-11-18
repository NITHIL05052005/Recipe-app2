import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMealDetails } from "../api";

function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealDetails(id).then(res => setMeal(res.data.meals[0]));
  }, [id]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 mb-4 inline-block">⬅ Back</Link>

      <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} className="rounded mb-4 w-96" alt="" />

      <h2 className="text-2xl font-bold">Instructions</h2>
      <p className="mt-2 whitespace-pre-line">{meal.strInstructions}</p>

      <h2 className="text-2xl font-bold mt-6">Ingredients</h2>
      <ul>
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = meal[`strIngredient${i+1}`];
          const measure = meal[`strMeasure${i+1}`];
          return ingredient ? <li key={i}>{ingredient} - {measure}</li> : null;
        })}
      </ul>

      {meal.strYoutube && (
        <a href={meal.strYoutube} target="_blank" className="text-blue-600 underline mt-4 block">
          Watch Video
        </a>
      )}
    </div>
  );
}

export default RecipeDetails;
