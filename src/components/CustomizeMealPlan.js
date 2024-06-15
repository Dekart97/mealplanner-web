import React from 'react';
import { Link } from 'react-router-dom';

const CustomizeMealPlan = () => {
  return (
    <div>
      <h2>Customize Your Meal Plan</h2>
      <section>
        <h3>Select Dietary Needs</h3>
        <div className="options">
          {/* Dietary needs options here */}
        </div>
      </section>
      <section>
        <h3>Select Allergies</h3>
        <div className="options">
          {/* Allergies options here */}
        </div>
      </section>
      <section>
        <h3>Cooking Experience Level</h3>
        <div className="options">
          {/* Experience level options here */}
        </div>
      </section>
      <button>
        <Link to="/create-recipe">Next</Link>
      </button>
    </div>
  );
};

export default CustomizeMealPlan;
