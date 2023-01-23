import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import axios from "axios";
import '../style/Weather.module.scss'
import styles from '../style/Weather.module.scss'
import HourlyWeather from "../components/HourlyWeather/HourlyWeather";
import Loader from "../components/UI/Loader/Loader";
import WeatherService from "../utils/WeatherService";

const Weather = () => {

    const params = useParams()
    const city = params.city
    const [weather, setWeather] = useState([])
    const [countryData, setCountryData] = useState({population: ""})

    const [getWeather, isWeatherLoading, isWeatherError] = useFetching(async () => {
        const response = await WeatherService.getHourlyWeather(city)
        setCountryData(response.data.city)
        setWeather(response.data.list)
    })

    useEffect(() => {
        getWeather()
    }, [city])


    return (
        <div className={styles.weather}>
            {
                isWeatherLoading ? <Loader/>
                    :
                    <>
                        <h1 className={styles.weather__title}>
                            {countryData.name}, {countryData.country}
                        </h1>
                        <h3 className={styles.weather__subtitle}>
                            Population: {countryData?.population.toLocaleString('eu')} mentions
                        </h3>
                        <HourlyWeather isWeatherLoading={isWeatherLoading} weather={weather}/>
                    </>
            }


        </div>
    );
};

export default Weather;