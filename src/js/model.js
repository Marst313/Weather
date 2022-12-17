import { getPosition } from './helper.js';
import { getJSON } from './helper.js';
import { API_URL_WEATHER, API_URL_LOCATION, KEY_WEATHER } from './config.js';

export const state = {
  location: {},
  weather: {},
};

const createLocationObject = function (data) {
  let curLocation = data;
  return {
    city: curLocation.city,
    locality: curLocation.locality,
    country: curLocation.countryName,
  };
};

export const loadCurrentPosition = async function () {
  try {
    const location = await getPosition();
    const { latitude: lat, longitude: longt } = location.coords;

    const dataLocationAPI = await getJSON(`${API_URL_LOCATION}${lat}&longitude=${longt}&localitiLanguage=en`);

    state.location = createLocationObject(dataLocationAPI);
  } catch (err) {
    console.error(`${err} 🌋🌋`);
    throw err;
  }
};

export const loadCurrentWeather = async function () {
  try {
    const dataWeather = await getJSON(`${API_URL_WEATHER}${state.location.locality}?key=${KEY_WEATHER}`);
    console.log(dataWeather);
  } catch (err) {
    throw err;
  }
};
