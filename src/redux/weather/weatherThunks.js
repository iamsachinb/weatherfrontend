import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://weatherbackend-3jp4.onrender.com/api/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await axios.get(`${API_URL}?city=${encodeURIComponent(city)}`);
    return response.data;
  }
);

export const addWeatherData = createAsyncThunk(
  'weather/addWeatherData',
  async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
  }
);