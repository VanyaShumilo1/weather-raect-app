import axios from "axios";

const API_KEY = '83a03672d8dcba2b1afddc21b5f9405324a76c9427094b6ca2f8cdd7'
const url = `https://api.ipdata.co?api-key=${API_KEY}`


export default class CityService {
    static async getCurrentCity () {
        const response = axios.get(url)
        return response
    }
}