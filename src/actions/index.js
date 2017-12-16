import axios from 'axios';
import { GET_DATA } from '../constants';


const API_KEY = 'c3d1b45b181f76fafbe2dc68ef3b4281';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;



export function getWeather(city) {

    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    //console.log(request);

    return {
        type: GET_DATA,
        payload: request
    }
}
