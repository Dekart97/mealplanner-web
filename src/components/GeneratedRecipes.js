// src/components/GeneratedRecipes.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const GeneratedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get('/mealplans/');
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Generated Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Est. time to cook: {recipe.time} mins</p>
            <button>Add To Meal List</button>
            <button>Cook Now</button>
          </div>
        ))}
      </div>
      <button>Meal Prep</button>
    </div>
  );
};

export default GeneratedRecipes;
