import { getNoDay, getPosition, getJSON, getCurrentDay } from './helper.js';
import { API_URL_WEATHER, API_URL_LOCATION, KEY_WEATHER } from './config.js';

export const state = {
  location: {},
  weather: {},
  search: {},
};

const createLocationObject = function (data) {
  let curLocation = data;
  return {
    city: curLocation.city,
    locality: curLocation.locality,
    country: curLocation.countryName,
  };
};

const createWeatherObject = function (data) {
  let curWeather = data;
  return {
    address: curWeather.resolvedAddress,
    description: curWeather.description,
    alerts: curWeather.alerts,
    descriptionCondition: curWeather.currentConditions.conditions,
    humidity: curWeather.currentConditions.humidity,
    iconWeather: curWeather.currentConditions.icon,
    sunrise: curWeather.currentConditions.sunrise,
    sunset: curWeather.currentConditions.sunset,
    temperature: curWeather.currentConditions.temp,
    uvindex: curWeather.currentConditions.uvindex,
    windspeed: curWeather.currentConditions.windspeed,
    hoursWeather: curWeather.days[0].hours,
    weekly: curWeather.days,
    currentDay: getCurrentDay(),
    day: getNoDay(),
  };
};

export const loadCurrentPosition = async function () {
  try {
    const location = await getPosition();
    const { latitude: lat, longitude: longt } = location.coords;

    const dataLocationAPI = await getJSON(`${API_URL_LOCATION}${lat}&longitude=${longt}&localitiLanguage=en`);

    state.location = createLocationObject(dataLocationAPI);
  } catch (err) {
    throw err;
  }
};

export const loadCurrentWeather = async function () {
  try {
    const dataWeather = await getJSON(`${API_URL_WEATHER}${state.location.locality}?key=${KEY_WEATHER}`);
    state.weather = createWeatherObject(dataWeather);
  } catch (err) {
    throw err;
  }
};

export const loadSearchWeather = async function (query) {
  try {
    const dataWeather = await getJSON(`${API_URL_WEATHER}${query}?key=${KEY_WEATHER}`);
    state.search = createWeatherObject(dataWeather);
  } catch (err) {
    throw err;
  }
};
