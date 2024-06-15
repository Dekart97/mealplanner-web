import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create-meal">Create Meal</Link>
                <Link to="/grocery-list">Grocery List</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/user">Profile</Link>
            </div>
        </nav>
    );
};

export default Navigation;