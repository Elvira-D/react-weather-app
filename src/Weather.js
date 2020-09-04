import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
      console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
      description: "Sunny",
    });

    setReady(true);
  }

  if (ready) {
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
        <h2> {weatherData.city} </h2>
        <ul>
          <li>Wednesday 7:30</li>
          <li>{weatherData.description}</li>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="sunny"
              ></img>
              <h1> {Math.round(weatherData.temperature)} </h1> <h3> °C </h3>
            </div>
            <ul>
              <li> Precipitation: 15% </li>
              <li> Humidity: 72% </li>
              <li> Wind: {weatherData.wind} km/h </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  } else {
    let apiKey = "4820a880cf32920cd905490b92fa0630";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <button className="btn btn-primary">
        <span className="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    );
  }
}
