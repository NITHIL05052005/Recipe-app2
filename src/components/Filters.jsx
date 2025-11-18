import React, { useEffect, useState } from "react";
import { listCategories, listIngredients } from "../api";

function Filters({ onCategorySelect, onIngredientSelect }) {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    listCategories().then(res => setCategories(res.data.meals));
    listIngredients().then(res => setIngredients(res.data.meals));
  }, []);

  return (
    <div className="flex gap-4 mb-4">
      <select onChange={(e) => onCategorySelect(e.target.value)} className="border p-2 rounded">
        <option value="">Select Category</option>
        {categories.map(c => <option key={c.strCategory} value={c.strCategory}>{c.strCategory}</option>)}
      </select>

      <select onChange={(e) => onIngredientSelect(e.target.value)} className="border p-2 rounded">
        <option value="">Select Ingredient</option>
        {ingredients.map(i => <option key={i.strIngredient} value={i.strIngredient}>{i.strIngredient}</option>)}
      </select>
    </div>
  );
}

export default Filters;
