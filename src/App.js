import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

import WeatherBox from './WeatherBox'

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const apiCall = async (evt) => {
    if (evt.key === "Enter") {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=37337e92cace3dbf81be18bc19e29fb8`
      );
      try {
        setWeather(res.data);
        setQuery("");
        console.log(res.data);
        console.log(weather);
      } catch (error) {
        console.error();
      }
    }
  };

  return (
    <main>
      <div className="search-box">
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          className="search-bar"
          placeholder="Search your city..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={apiCall}
        />
      </div>
      {typeof weather.main != "undefined" ? (
       <WeatherBox weather={weather}></WeatherBox>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
