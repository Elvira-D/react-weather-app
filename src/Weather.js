import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="search-form"
          autoFocus="on"
        />
        <br />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h2> New York </h2>
      <ul>
        <li>Wednesday 7:30</li>
        <li>Mostly Sunny</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="sunny"
            ></img>
            <h1> 18 </h1> <h3> ° C </h3>
          </div>
          <ul>
            <li> Precipitation: 15% </li>
            <li> Humidity: 72% </li>
            <li> Wind: 12km/h </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
