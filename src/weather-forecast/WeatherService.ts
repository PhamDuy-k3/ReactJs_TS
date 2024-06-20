import axios from 'axios';

const API_KEY = '4a0ff62beba4a726f9e139eb0044c6be';  // Sử dụng API Key của bạn
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error:any) {
    console.error(`Error fetching weather data: ${error.message}`);
    throw error;
  }
};
