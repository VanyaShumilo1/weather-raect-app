import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import {Link} from "react-router-dom";

const CurrentWeather = () => {

    const API_KEY = '83a03672d8dcba2b1afddc21b5f9405324a76c9427094b6ca2f8cdd7'
    const urlForCurrentCity = `https://api.ipdata.co?api-key=${API_KEY}`
    const OWM_API = '04399a1ae3b4588b6921a4010e3ca8d9'
    const [city, setCity] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OWM_API}&units=metric`

    const [getCurrentCity, isCurrentCityLoading, currentCityError] = useFetching(async () => {
        const response = await axios.get(urlForCurrentCity)
        setCity(response.data.city)
    })

    const [currentWeather, setCurrentWeather] = useState({ weather: [{}]})
    const [getWeather, isWeatherLoading, weatherError] = useFetching(async () => {
        const resopose = await axios.get(url)
        setCurrentWeather(resopose.data)
    })


    useEffect(() => {
        getCurrentCity()
        getWeather()
    }, [city, urlForCurrentCity])

    return (
        <div>
            {
                isWeatherLoading
                    ? <Loader/>
                    :
                    <div style={{'display': 'flex', 'gap': 30, 'alignItems': 'center'}}>
                        <Link to={`/weather/${currentWeather.name}`}>{currentWeather.name}, {currentWeather?.sys?.country}</Link>

                        <div>
                            <div>{currentWeather?.weather[0]?.main}, {currentWeather?.main?.humidity} %</div>
                            <div className="navbar__temp">
                                <div>{Math.round(currentWeather?.main?.temp)} °С</div>
                                <div><img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} alt="img"/></div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CurrentWeather;