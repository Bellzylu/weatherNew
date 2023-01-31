import React from "react"
import "./Forecast.css"

export default function Forecast(props){
    return(
        <div id="forecastContainer"> 
<div id="iconsContainer">
     <div className = "icons"> 
    <h2 className= "weather" id="day"> {props.day} </h2> 
    <span className="image"> {props.icon}
     </span>
    <h5 className= "minValues"> {props.minValues} </h5>
    <h5 className= "maxValues"> {props.maxValues} </h5>
</div>
</div>
</div>
    )
}