import axios from "axios";

const OWM_API = '04399a1ae3b4588b6921a4010e3ca8d9'

export default class WeatherService {

    static async getCurrentWeather (city) {
        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OWM_API}&units=metric`)
        return response
    }

    static async getHourlyWeather (city) {
        const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OWM_API}&units=metric`)
        return response
    }

}