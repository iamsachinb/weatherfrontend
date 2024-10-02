// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';
import favoritesReducer from './favorites/favoritesSlice';

const rootReducer = combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer,
});

export default rootReducer;