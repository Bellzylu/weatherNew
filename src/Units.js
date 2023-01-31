import React from "React";
import { Link } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Units(props){
    return(
        <BrowserRouter> 
        <div class ="units">  
                <Link to ="/index.js" id = "celcius">  °C  </Link> 
                <h2>{props.Celcius} | </h2>
                <Link to= "/index.js" id = "farenheit"> {props.Farenheit} F
                </Link> 
            </div>
     </BrowserRouter>
    )
}