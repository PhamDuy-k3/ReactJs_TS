// Weather.tsx

import React, { useState } from "react";
import { getWeather } from "./WeatherService";
import "./Weather.scss"; // Import file CSS/SCSS

const Weather: React.FC = () => {
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const location = `${city}`;
      const data = await getWeather(location);
      setWeather(data);
      setError(null); 
    } catch (err: any) {
      setError(
        err.message || "Failed to fetch weather data. Please try again."
      );
    }
  };

  return (
    <div className="weather-app">
      <h2 className="weather-title">Weather App</h2>
      <div className="weather-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />

        <button onClick={fetchWeather} className="fetch-button">
          Get Weather
        </button>

        {error && <p className="error-message">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h3 className="weather-city">{weather.name}</h3>
            <p className="weather-temp">Temperature: {weather.main.temp}°C</p>
            <p className="weather-condition">
              Condition: {weather.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
