import React from "react";

export default function WeatherData(props){
    return(
        <div> 
    <span id = "description"> 
    <img src={props.Icon} alt={props.description} />
     {props.Description}
     </span>
       <span id = "humidity">  {props.Humidity} </span>
        <span id = "wind">  {props.Wind} </span>
         <span id = "coords">  {props.Lat}, {props.Lon}</span>

</div>
    )

}