import * as model from './model.js';
import searchView from './view/searchView.js';
import weatherViewHour from './view/weatherViewHour.js';
import descriptionView from './view/descriptionView.js';
import weatherViewWeekly from './view/weatherViewWeekly.js';
import conditionView from './view/conditionView.js';
import mapView from './view/mapView.js';

const controlRenderWeather = async function (data) {
  try {
    weatherViewHour.renderSpinner();

    //1. Render Current Condition
    searchView.render(model.state);

    //2. Render Hours Weather
    weatherViewHour.render(data);

    //3. Render Description
    descriptionView.render(data);

    //4. Render Weekkly Weather
    weatherViewWeekly.render(data);

    //5. marking current day
    weatherViewWeekly.markingCurrentDay();

    conditionView.render(data);
  } catch (err) {
    console.error(`${err},🌋🌋🌋🌋`);
  }
};

const controlRenderMap = async function () {
  try {
    mapView.renderSpinner();

    mapView.render();
  } catch (err) {
    throw err;
  }
};

const controlSearchResults = async function () {
  try {
    weatherViewHour.renderSpinner();

    //1. Get search query
    const query = searchView.getQuery();

    await model.loadSearchWeather(query);

    controlRenderWeather(model.state.search);
    //2. rendering search result
  } catch (err) {
    weatherViewHour.renderError();
  }
};

const init = async function () {
  try {
    weatherViewHour.renderSpinner();
    // 1. initialitation the weather data
    await model.loadCurrentPosition();
    await model.loadCurrentWeather();
    controlRenderWeather(model.state.weather);

    controlRenderMap();

    // 2. Activated dots
    descriptionView.activeDots(0);

    // 3. When dots get clicked make the other dots opacity-50
    descriptionView.addHandlerEvent();

    // 4. Searching place
    searchView.addHandlerSearch(controlSearchResults);

    // weatherViewWeekly.generateDay();
  } catch (err) {
    searchView.renderError();
  }
};

init();
