import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import HourlyWeather from "../components/HourlyWeather/HourlyWeather";
import styles from "../style/Weather.module.scss";
import WeatherService from "../utils/WeatherService";

const Home = () => {

    const dispatch = useDispatch()
    const city = useSelector(state => state.currentCity)

    const [hourlyWeather, setHourlyWeather] = useState({weather: [{}]})
    const [data, setData] = useState({})
    const [getHourlyWeather, isHourlyWeatherLoading, hourlyWeatherError] = useFetching(async () => {
        const response = await WeatherService.getHourlyWeather(city)
        setData(response.data.city)
        setHourlyWeather(response.data.list)
    })

    useEffect(() => {
        getHourlyWeather()
    }, [city])


    return (
        <div className={styles.weather}>

            {
                isHourlyWeatherLoading
                    ? <Loader/>
                    : <>
                        <h1 className={styles.weather__title}>
                            {data.name}, {data.country}
                        </h1>
                        <h3 className={styles.weather__subtitle}>
                            Population: {data?.population.toLocaleString('eu')} mentions
                        </h3>
                        <HourlyWeather weather={hourlyWeather} isWeatherLoading={isHourlyWeatherLoading}/>
                     </>
            }
        </div>
    );
};

export default Home;