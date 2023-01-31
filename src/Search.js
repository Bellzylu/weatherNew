import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./Search.css";

export default function Search(){ 
    return(
<form id= "locationInput" > 
            <input
            type = "text"
            class = "search"
            placeholder = "Search Location"
        />
        <button type = "submit" class = "submit">
        <i class = "fas fa-search" > </i>
        </button>
        </form>
        )
        }