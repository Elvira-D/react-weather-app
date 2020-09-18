import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
            <WeatherIcon code={props.data.icon} />
            
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
