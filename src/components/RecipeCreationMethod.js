import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const RecipeCreationMethod = () => {
  const [dishName, setDishName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const generateRecipeByName = async () => {
    try {
      const response = await api.post('/mealplans/', { name: dishName, ingredients: '', description: '', instructions: '', image: '', time: 0 });
      console.log(response.data);
      navigate('/generated-recipes');
    } catch (error) {
      console.error(error);
    }
  };

  const generateRecipeByIngredients = async () => {
    try {
      const response = await api.post('/mealplans/', { name: '', ingredients, description: '', instructions: '', image: '', time: 0 });
      console.log(response.data);
      navigate('/generated-recipes');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Customize Your Meal Plan</h2>
      <section>
        <h3>Enter the name of a dish</h3>
        <input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          placeholder="Chicken curry with white rice"
        />
        <button onClick={generateRecipeByName}>Generate Recipe</button>
      </section>
      <p>or</p>
      <section>
        <h3>Enter a list of ingredients separated by commas</h3>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Chicken breast, white rice, green peppers, onions, tomatoes"
        />
        <button onClick={generateRecipeByIngredients}>Generate Recipe</button>
      </section>
    </div>
  );
};

export default RecipeCreationMethod;
