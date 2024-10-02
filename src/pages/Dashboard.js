import React from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import FavoritesList from '../components/FavoritesList';

const Dashboard = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <WeatherCard />
      <FavoritesList />
    </div>
  );
};

export default Dashboard;