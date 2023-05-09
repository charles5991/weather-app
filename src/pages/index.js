import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchHistory from "../components/SearchHistory";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const getCustomIconUrl = (condition) => {
    const conditionLowerCase = condition.toLowerCase();

    if (conditionLowerCase.includes("cloud")) {
      return "/cloud.png";
    } else if (
      conditionLowerCase.includes("sun") ||
      conditionLowerCase.includes("clear")
    ) {
      return "/sun.png";
    }
    return "/cloud.png";
  };

  const fetchWeatherData = async (cityAndCountry) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityAndCountry,
            appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
            units: "metric",
          },
        }
      );

      const { name, sys, weather, main } = response.data;

      const iconUrl = getCustomIconUrl(weather[0].description);

      setWeatherData({
        cityName: name,
        country: sys.country,
        temperature: main.temp,
        condition: weather[0].description,
        iconUrl: iconUrl,
        humidity: main.humidity,
        highTemp: main.temp_max,
        lowTemp: main.temp_min,
      });

      setError("");
      return true;
    } catch (err) {
      setError("Invalid city or country name");
      setWeatherData(null);
      return false;
    }
  };

  const handleSearch = async (cityAndCountry) => {
    const isSuccessful = await fetchWeatherData(cityAndCountry);

    // Only store the search history if the API request was successful
    if (isSuccessful) {
      setSearchHistory([...searchHistory, cityAndCountry]);
    }
  };

  const handleDeleteHistory = (index) => {
    setSearchHistory(searchHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <Head>
        <title>Next.js Weather App</title>
      </Head>
      <div className="text-center m-5">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="container mt-24 rounded-2xl border-slate-50	 backdrop-blur-sm p-3 bg-white/30">
        <WeatherDisplay weatherData={weatherData} error={error} />
        <SearchHistory
          history={searchHistory}
          onSearchAgain={fetchWeatherData}
          onDelete={handleDeleteHistory}
        />
      </div>
    </div>
  );
};

export default Home;
