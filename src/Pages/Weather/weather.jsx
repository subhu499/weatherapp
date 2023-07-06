import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Weather.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=be521f2a8f5e4abfb9d111946230205&q=${location}&days=6`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter location"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full md:w-64"
          value={location}
          onChange={handleLocationChange}
        />
        {weatherData && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <div className="flex items-center justify-center mb-4">
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
                className="w-12 h-12"
              />
              <span className="text-lg font-bold ml-2">
                {weatherData.current.temp_c}°C
              </span>
            </div>
            <p className="text-gray-700">
              {weatherData.current.condition.text}
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">6-Day Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {weatherData.forecast.forecastday.map((day) => (
                  <div key={day.date} className="border p-4">
                    <p className="font-bold">{day.date}</p>
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                      className="w-8 h-8 mt-2"
                    />
                    <p className="text-sm mt-2">{day.day.avgtemp_c}°C</p>
                    <p className="text-gray-700">{day.day.condition.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
