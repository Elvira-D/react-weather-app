import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container"> </div>

      <Weather />

      <footer>
        Coded by Elvira Di Marco
        <br />
        <a
          href="https://linkedin.com/in/elvira-di-marco"
          target="blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <br />
        <a
          href="https://github.com/Elvira-D/react-weather-app"
          target="blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
