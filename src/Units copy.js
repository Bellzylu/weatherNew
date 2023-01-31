import React from "React";
import { Link } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Units(props){
    return(
        <BrowserRouter> 
        <div class ="units">  
                <HashLink to ="#index" id = "celcius">  °C  </HashLink> 
                <h2>{props.Celcius} | </h2>
                <HashLink to= "#index" id = "farenheit"> {props.Farenheit} F
                </HashLink> 
            </div>
    </BrowserRouter>
    )
}