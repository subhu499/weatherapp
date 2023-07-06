import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ weatherData }) => {
  const getTemperatureData = () => {
    const labels = weatherData.forecast.forecastday.map((day) => day.date);
    const temperatures = weatherData.forecast.forecastday.map(
      (day) => day.day.avgtemp_c
    );

    return {
      labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatures,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.4)',
        },
      ],
    };
  };

  return <Line data={getTemperatureData()} />;
};

export default TemperatureChart;
