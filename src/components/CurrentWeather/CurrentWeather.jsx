import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SET_CURRENT_CITY} from "../../store";
import WeatherService from "../../utils/WeatherService";
import CityService from "../../utils/CityService";

const CurrentWeather = () => {

    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const [getCurrentCity, isCurrentCityLoading, currentCityError] = useFetching(async () => {
        const response = await CityService.getCurrentCity()
        setCity(response.data.city)
        dispatch({type: SET_CURRENT_CITY, payload: response.data.city})
    })

    const [currentWeather, setCurrentWeather] = useState({weather: [{}]})
    const [getWeather, isWeatherLoading, weatherError] = useFetching(async () => {
        const resopose = await WeatherService.getCurrentWeather(city)
        setCurrentWeather(resopose.data)
    })


    useEffect(() => {
        getCurrentCity()
        getWeather()
    }, [city])

    return (
        <div>
            {
                isWeatherLoading
                    ? <Loader/>
                    :
                    <div style={{'display': 'flex', 'gap': 30, 'alignItems': 'center'}}>
                        <Link
                            to={`/weather/${currentWeather.name}`}>{currentWeather.name}, {currentWeather?.sys?.country}</Link>

                        <div>
                            <div>{currentWeather?.weather[0]?.main}, {currentWeather?.main?.humidity} %</div>
                            <div className="navbar__temp">
                                <div>{Math.round(currentWeather?.main?.temp)} °С</div>
                                <div><img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                                          alt="img"/></div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CurrentWeather;