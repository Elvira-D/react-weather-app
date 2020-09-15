import React from "react";

import FormattedDate from "./FormattedDate";

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
            <h1> {Math.round(props.data.temperature)} </h1> <h3> °C </h3>
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
