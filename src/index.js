import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cities from "./Cities";
import Condition from "./Condition";
import Date from "./Date";
import "./Containers.css";
import Footer from "./Footer";
import Search from "./Search";// import Units from "./Units";
// import Circle from "./Circle.js";
import WeatherSearch from "./WeatherSearch";
import Panel from "./Panel";
import "./background.css";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherData from "./WeatherData";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <StrictMode>
    <div class= "background"> 
      <div className = "container"> 
      <Cities cityName = "New York 🌪 "/>
      <Date currentDate = "06.01.2023" CurrentTime= "14:05">

      </Date>
      
      <Condition 
      Condition = "Windy"
      Degrees = {5}
       Humidity = "80">
          </Condition> 

    </div>
    <Panel></Panel>
   
  
    </div>
     <Footer></Footer>
  </StrictMode>
  
);


