import React from "react";
import "./Condition.css";
// import Circle from "./Circle";
import "./Circle.css";
import WeatherSearch from "./WeatherSearch";
import displayWeather from "./WeatherSearch";


export default function Condition(props){
    return(
            <div className ="circle">
            <h5 className="condition text">
                {props.Condition} </h5>     
            
          < div className = "inLine"> 
            <h1 className="degrees text" > {props.Degrees} </h1> 
            <h2 id = "#celcius" >  °C | F </h2> 
           </div>

            <h5 className = "humidity text"> Humidity: {props.Humidity}%  </h5>
            </div>
   
            

    )
}