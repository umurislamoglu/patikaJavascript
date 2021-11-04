import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import styles from "./days.module.css";


const Days = () => {
  const { weatherData } = useContext(WeatherContext);


console.log(weatherData)
const days=  ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  return <div className={styles.days}>

    {weatherData.map((day,idx)=> {
        return <div key={idx}>
            <p>{days[new Date(day.dt * 1000).getDay()]}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="hava durum icon" />
            <div className= {styles.temp}>
                <p>{Math.round(day.temp.max)}&#176;</p>
                <p>{Math.round(day.temp.min)}&#176;</p>
            </div>
        </div>
    })}


  </div>;
};

export default Days;
