import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          <h1> {Math.round(props.celsius)} </h1>
        </span>
        <span className="unit">
          {" "}
          <h3>
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </h3>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          <h1> {Math.round(fahrenheit)} </h1>
        </span>
        <span className="unit">
          {" "}
          <h3>
            <a href="/" onClick={showCelsius}>
              {" "}
              °C{" "}
            </a>{" "}
            | °F
          </h3>
        </span>
      </div>
    );
  }
}
