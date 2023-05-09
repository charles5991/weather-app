// components/WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ weatherData, error }) => {
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  const {
    cityName,
    country,
    temperature,
    condition,
    iconUrl,
    humidity,
    highTemp,
    lowTemp,
  } = weatherData;

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-2">
        {cityName}, {country}
      </h2>
      <img src={iconUrl} alt="weather icon" className="h-16 w-16" />
      <h3 className="text-lg mb-2">{condition}</h3>
      <p className="text-lg">{temperature}°C</p>
      <p className="text-lg">Humidity: {humidity}%</p>
      <p className="text-lg">
        H: {highTemp}°C / L: {lowTemp}°C
      </p>
    </div>
  );
};

export default WeatherDisplay;
