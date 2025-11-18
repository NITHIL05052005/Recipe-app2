import React, { useEffect, useState } from "react";
import { searchByName, listCategories, listIngredients, filterByCategory, filterByIngredient } from "../api";
import RecipeCard from "../components/RecipeCard";
import Filters from "../components/Filters";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await searchByName("");
    setRecipes(res.data.meals || []);
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const res = await searchByName(e.target.value);
    setRecipes(res.data.meals || []);
  };

  const handleFilterCategory = async (value) => {
    const res = await filterByCategory(value);
    setRecipes(res.data.meals || []);
  };

  const handleFilterIngredient = async (value) => {
    const res = await filterByIngredient(value);
    setRecipes(res.data.meals || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Recipe App</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
        className="border p-2 w-full mb-4 rounded"
      />

      <Filters 
        onCategorySelect={handleFilterCategory}
        onIngredientSelect={handleFilterIngredient}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
