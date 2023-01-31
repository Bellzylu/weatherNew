import React from "react";
import "./units.css";
import Units from "./Units";

//Function wich rounds celcius number-used for the current temp attribute
    function showCelcius(event) {
        event.preventDefault();
    const tempElement = document.querySelector(".temp");
        tempElement.innerHTML = Math.round(temperatureElem) + "&#176" ;

    }

    //Function that calculates the F temp based on the C temp from the API
        function showFahrenheitTemp(event){
            event.preventDefault();
            // fetchWeatherData()
            const farenheit = (temperatureElem * 9) /5 + 32 ;
            const tempElement = document.querySelector(".temp");
            tempElement.innerHTML = Math.round(farenheit) + "&#176" ;
        }

    let temperatureElem = null;


  //Convert C to F and vise versa on click

        const farenheitLink = document.querySelector("#farenheit");
        farenheitLink.addEventListener("click", showFahrenheitTemp);

        const celciusLink = document.querySelector("#celcius");
        celciusLink.addEventListener("click", showCelcius);