import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h2> {props.data.city} </h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>

        <div className="row">
          <div className="col-6">
            <img src={props.data.iconUrl} alt={props.data.description}></img>
            <WeatherTemperature celsius={props.data.temperature} />
            
          </div>
          <ul>
            <li> Humidity: {props.data.humidity}% </li>
            <li> Wind: {Math.round(props.data.wind)} km/h </li>
          </ul>
          
          </div>
          </ul>
      </div>
        
      
    
  );

}
