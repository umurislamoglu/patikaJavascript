import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import styles from "./select.module.css";

const Select = () => {
  const { cities , selectedCity ,setSelectedCity } = useContext(WeatherContext);

const handleCityChange = (e) => {
    for( let i = 0; i< cities.length ; i ++){
        if(e.target.value === cities[i].name){
            setSelectedCity(cities[i])
        }
    }
}



  return (
    <div>
      <select style={{width:"200px"}} value={selectedCity.name} onChange={handleCityChange} className={styles.select}>
        {cities.map((city, idx) => {
          return <option key={idx} value={city.name}>{city.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
