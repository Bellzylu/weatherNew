import "./Panel.css";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./Search";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import WeatherSearch from "./WeatherSearch";

export default function Panel (){
    return(
      <div className="panel"> 
      <WeatherSearch></WeatherSearch>
 
     <ul className="details">
        <h4>WeatherData</h4>
        <li>
    <span>Humidity</span> 
    <WeatherData Humidity = "80%">
    </WeatherData>
</li>
  <li>
    <span>Wind</span> 
    <WeatherData Wind = "8km/h">
    </WeatherData>
</li>
 <li>
    <span>Coordinates (Lat,Long)</span> 
    <WeatherData Coordinates = "8.567, 0.2674">
    </WeatherData>
</li>
     </ul>

     <ul class = "details" >
            <h4>Forecast data</h4>
     <li> 
 <Forecast day ="Monday" icon="☀️" minValues="0°C"></Forecast>
 </li>
   <li>
  <Forecast day ="Tuesday" icon="⛅️" minValues="2°C"></Forecast>
  </li>
    <li>
  <Forecast day ="Wednesday" icon="☀️" minValues="6°C"></Forecast>
  </li>
    <li>
  <Forecast day ="Thursday" icon="⛈" minValues="1°C"></Forecast>
  </li>
    <li>
  <Forecast day ="Friday" icon="⛅️" minValues="2°C"></Forecast>
  </li>
   <li>
  <Forecast day ="Saturday" icon="☀️" minValues="5°C"></Forecast>
  </li>
      </ul>
            
 {/* <Forecast day ="Monday" icon="☀️" minValue="0/" maxValue="4"></Forecast> */}
          
     </div>
    )
}