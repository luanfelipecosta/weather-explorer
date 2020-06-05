import axios from 'axios';
// const API_KEY = '04946c29e27e5cb2d6467bc4e924313d';
const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';

export const fetchWeather = (city) =>
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      APPID: API_KEY,
      type: 'accurate',
    },
  });

export const fetchForecast = (city) =>
  axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
    params: {
      q: city,
      APPID: API_KEY,
      type: 'accurate',
      cnt: 5,
    },
  });
