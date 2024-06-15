import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CustomizeMealPlan from './components/CustomizeMealPlan';
import RecipeCreationMethod from './components/RecipeCreationMethod';
import GeneratedRecipes from './components/GeneratedRecipes';
import Navigation from './components/Navigation';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-meal" element={<CustomizeMealPlan />} />
          <Route path="/create-recipe" element={<RecipeCreationMethod />} />
          <Route path="/generated-recipes" element={<GeneratedRecipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
