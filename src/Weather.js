import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="search-form"
            autoFocus="on"
          />

          <input type="submit" value="Search" className="btn btn-info" />
        </form>
        <Weatherinfo data={weatherData}/>
        
      </div>
    );
  } else {
    let apiKey = "4820a880cf32920cd905490b92fa0630";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <button className="btn btn-primary">
        <span className="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    );
  }
}
