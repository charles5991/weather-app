// components/WeatherDisplay.js
import React, { useState, useEffect } from "react";

const WeatherDisplay = ({ weatherData, error }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="grid grid-cols-3 gap-4 m-2">
      <div className="col-span-2">
        <p className="text-md p-1 text-white font-semibold">
          Today&apos;s Weather
        </p>
        <h2 className="text-6xl text-white font-semibold mb-2">
          {temperature}°C
        </h2>
        <p className="text-sm text-white font-semibold">
          H: {highTemp}°C / L: {lowTemp}°C
        </p>
      </div>
      <div className="relative">
        <img
          src={iconUrl}
          alt="weather icon"
          className="absolute bottom-[25px] left-10 w-full h-full"
        />
      </div>
      <div className="col-span-1 text-white font-semibold">
        <h3 className="text-sm mb-2">{condition}</h3>
      </div>
      <div className="col-span-1">
        <p className="text-sm text-white font-semibold">
          {cityName}, {country}
        </p>
      </div>
      <div className="col-span-1 text-white font-semibold">
        <p className="text-sm">Humidity: {humidity}%</p>
      </div>
      <div className="col-span-1 text-white font-semibold">
        <p className="text-lsm">Current Time: {time}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
