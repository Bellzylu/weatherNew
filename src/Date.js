import React from "react";
import "./date.css";

export default function Date(props){
    return(
        <div className="Date">
        <h4 className ="time">{props.CurrentTime}</h4>
<h5 className= "date">{props.currentDate}</h5>
 </div>
    )
}