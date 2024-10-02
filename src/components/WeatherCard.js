// src/components/WeatherCard.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorites/favoritesSlice';
import './WeatherCard.css'; // Import the CSS file for styling

const WeatherCard = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(state => state.weather);

  if (status === 'loading') return <div className="loading">Loading...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;
  if (!data) return null;

  const handleAddFavorite = () => {
    dispatch(addFavorite(data.name));
  };

  return (
    <div className="weather-card">
      <h2 className="city-name">{data.name}</h2>
      <p className="temperature">Temperature: {data.main.temp}°C</p>
      <p className="weather-description">Weather: {data.weather[0].description}</p>
      <button onClick={handleAddFavorite} className="favorite-button">Add to Favorites</button>
    </div>
  );
};

export default WeatherCard;
