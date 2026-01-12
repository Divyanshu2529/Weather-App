import React, { useState } from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import axios from 'axios'

export default function App() {

  const [data, setData] = useState();
  const [location, setLocation] = useState('');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(API_URL).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
    }
  };

  return (
    <>
      <div style={{ minHeight: "100vh", background: "transparent" }}>
        <Header />
        <Body />
        <Bottom />
      </div>
    </>
  );
}
