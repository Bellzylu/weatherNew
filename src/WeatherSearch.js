import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherData from "./WeatherData";
import Condition from "./Condition.js"

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});


  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
    temperature: `${Math.round(response.data.main.temp)} °C `,
    humidity: `${response.data.main.humidity} %`,
    wind: `${response.data.wind.speed} km/h`,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    description: response.data.weather[0].description,
    lat: `${response.data.coord.lat}`,
    lon: `${response.data.coord.lon}`,
    });

    console.log(Math.round(response.data.main.temp));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a72eacb9d82e854fa98860dc2139989e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
    //access to city
    //make an api call
    //update the weather api
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      className= "search"
      placeholder="Enter a city" 
      onChange={updateCity} />
      {/* <button type="submit">
        Search 
        </button> */}
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="details">
             <h4>WeatherData</h4>

    <li>
    <span>Description</span> 
    <WeatherData Icon = {weather.icon}
    Description ={weather.description}
    >
    </WeatherData>
</li>
        <li>
    <span>Humidity</span> 
    <WeatherData Humidity = {weather.humidity} >
    </WeatherData>
</li>
 <li>
    <span>Wind</span> 
    <WeatherData Wind ={weather.wind}>
    </WeatherData>
</li>
 <li>
    <span>Coordinates</span> 
    <WeatherData Lat ={weather.lat} Lon= {weather.lon}>
    </WeatherData>
</li>

          <li> Temperature{weather.temerature} °C </li>

     {/* Bruk Icon senere for å oppdatere ved siden av
     heading */}
          {/* <li>
            <img src={weather.icon} alt={weather.description} />
          </li> */}
        </ul>
      </div>
    );
  } else {
    return form;
  }
  <Condition Condition = {weather.description}>
</Condition>
}



