import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import axios from "axios";
import WeatherCard from "../components/weather/WeatherCard";
import '../style/Weather.module.scss'
import Loader from "../components/UI/Loader/Loader";
import styles from '../style/Weather.module.scss'

const Weather = () => {

    const OWM_API = '04399a1ae3b4588b6921a4010e3ca8d9'

    const params = useParams()
    const city = params.city
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OWM_API}&units=metric`
    const [weather, setWeather] = useState([])
    const [countryData, setCountryData] = useState({population: ""})

    const [getWeather, isWeatherLoading, isWeatherError] = useFetching(async () => {
        const response = await axios.get(url)
        console.log(response)
        setCountryData(response.data.city)
        setWeather(response.data.list)
    })

    useEffect(() => {
        getWeather()
    }, [city, url])

    console.log(countryData)


    return (
        <div className={styles.weather}>

            <h1 className={styles.weather__title}>
                {countryData.name}, {countryData.country}
            </h1>
            <h3 className={styles.weather__subtitle}>
                Population: {countryData?.population.toLocaleString('eu')} mentions
            </h3>

            <div className={styles.weather__cards}>
                {
                    isWeatherLoading || weather.length !== 40
                        ? <Loader/>
                        : weather.map(day => (
                            <WeatherCard key={day.dt} props={day}/>
                        ))
                }
            </div>
        </div>
    );
};

export default Weather;