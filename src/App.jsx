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

  const [error, setError] = useState("");   
  const [loading, setLoading] = useState(false); 

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const searchLocation = async (e) => {
    e.preventDefault();

    const raw = location.trim();
    if (!raw) return;

    setLoading(true);
    setError("");

    const city = encodeURIComponent(raw);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setData(weatherRes.data);

      const daily = forecastRes.data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setForecast(daily);
    } catch (err) {
      const status = err.response?.status;

      if (status === 404) {
        setError("City not found. Please check spelling and try again.");
      } else if (status === 401) {
        setError("Invalid API key. Check your VITE_WEATHER_API_KEY.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      setData(null);
      setForecast([]);
      console.log("API error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <Header
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />

      {loading && (
        <p style={{ color: "white", marginTop: "0.5rem" }}>Loading...</p>
      )}

      {error && (
        <p style={{ color: "white", marginTop: "0.5rem" }}>{error}</p>
      )}

      <Body data={data} unit={unit} setUnit={setUnit} />

      <Bottom forecast={forecast} unit={unit} />
    </div>
  );
}
