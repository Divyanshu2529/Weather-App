import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("C"); 
  const [forecast, setForecast] = useState([]); 

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const searchLocation = async (e) => {
    e.preventDefault();
    if (!location.trim()) return;

    const city = encodeURIComponent(location.trim());

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setData(weatherRes.data);
      console.log("Weather data:", weatherRes.data);

      const daily = forecastRes.data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setForecast(daily);
      console.log("5-day forecast:", daily);
    } catch (err) {
      console.log("API error:", err.response?.data || err.message);
      setForecast([]);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <Header
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />

      <Body data={data} unit={unit} setUnit={setUnit} />

      <Bottom forecast={forecast} unit={unit} />
    </div>
  );
}
