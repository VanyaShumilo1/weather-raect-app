import axios from "axios";
import {useEffect, useState} from "react";
import WeatherCard from "./components/weather/WeatherCard";
import {useFetching} from "./hooks/useFetching";

function App() {

    const [city, setCity] = useState('london')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fee24acea84b38eba1e6955ced4e83ea&units=metric`
    const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fee24acea84b38eba1e6955ced4e83ea&units=metric`
    const [cities, setCities] = useState([])
    const [data, setData] = useState({})
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(true)


    const [getWeather, isWeatherLoading, weatherError] = useFetching(async () => {
        const response = await axios.get(url)
        console.log(response.data)
        setData(response.data)
    })


    const [hourlyForecast, setHourlyForecast] = useState([])
    const [hourly, isHourlyLoading, hourlyErr] = useFetching(async () => {
        const response = await axios.get(hourlyUrl)
        console.log(response.data)
        setHourlyForecast(response.data.list)
    })

    useEffect(() => {
        getWeather()
        hourly()
    }, [city, url])


    const [value, setValue] = useState('')
    const saveCity = () => {
        setCity(value)
    }

    const addCity = () => {
        setCities([...cities, value])
    }


    return (
        <div className="App">
            <div className="cards">
                <WeatherCard data={data} err={weatherError} loading={isWeatherLoading}/>
            </div>

            <h3>Hourly</h3>

            <div className="cards">
                {
                    hourlyForecast.map(day => (
                        <div key={day.dt_txt}>
                            {day.dt_txt}
                        </div>
                    ))
                }
            </div>


            <div>
                <input type="text" placeholder="Enter city..." value={value}
                       onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => saveCity()}>Save</button>
                <button onClick={() => addCity()}>Add city</button>
            </div>

            <button onClick={() => console.log(data)}> Load</button>
        </div>
    );
}

export default App;
