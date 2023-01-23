import React from 'react';
import styles from "../../style/Weather.module.scss";
import Loader from "../UI/Loader/Loader";
import WeatherCard from "../weather/WeatherCard";

const HourlyWeather = ({isWeatherLoading, weather}) => {
    return (
        <div className={styles.weather__cards}>
            {
                isWeatherLoading || weather.length !== 40
                    ? <Loader/>
                    : weather.map(day => (
                        <WeatherCard key={day.dt} props={day}/>
                    ))
            }
        </div>
    );
};

export default HourlyWeather;