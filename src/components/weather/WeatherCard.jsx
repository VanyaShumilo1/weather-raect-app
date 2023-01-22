import React from 'react';
import styles from './WeatherCard.module.scss'

const WeatherCard = ({...props}) => {
    const weather = props.props
    return (
        <div className={styles.WeatherCard}>
            <div className="WeatherCard__date">
                {weather?.dt_txt.split(' ')[0]}
            </div>
            <div className={styles.WeatherCard__hour}>
                {weather?.dt_txt.split(' ')[1].substring(0,5)}
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="img"/>
            </div>
            <div>
                {Math.round(weather?.main?.temp)} °C
            </div>
        </div>
    );
};

export default WeatherCard;