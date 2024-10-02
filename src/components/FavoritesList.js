// src/components/FavoritesList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favorites/favoritesSlice';
import { fetchWeather } from '../redux/weather/weatherThunks';
import './FavoritesList.css'; // Import the CSS file for styling

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.cities);

  return (
    <div className="favorites-list">
      <h3>Favorite Cities</h3>
      {favorites.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        <ul>
          {favorites.map(city => (
            <li key={city} className="favorite-item">
              <span>{city}</span>
              <div className="button-group">
                <button className="weather-button" onClick={() => dispatch(fetchWeather(city))}>
                  Get Weather
                </button>
                <button className="remove-button" onClick={() => dispatch(removeFavorite(city))}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
