// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Home = () => {
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await api.get('/mealplans/');
        setMealPlans(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMealPlans();
  }, []);

  return (
    <div>
      <button>
        <Link to="/create-meal">Generate Meals</Link>
      </button>
      <section>
        <h2>Recently Created</h2>
        <div className="meal-grid">
          {mealPlans.map((mealPlan) => (
            <div key={mealPlan.id}>
              <img src={mealPlan.image} alt={mealPlan.name} />
              <h3>{mealPlan.name}</h3>
              <p>{mealPlan.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Featured Meals</h2>
        <div className="meal-grid">
          {mealPlans.map((mealPlan) => (
            <div key={mealPlan.id}>
              <img src={mealPlan.image} alt={mealPlan.name} />
              <h3>{mealPlan.name}</h3>
              <p>{mealPlan.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

