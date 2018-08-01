import axios from 'axios';

const API_KEY = '8e0f75dda8e5ba95d01a56e769a5e3dd'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`



//to keep our action type consistent between action creators and reducers


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  //axios.get returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
