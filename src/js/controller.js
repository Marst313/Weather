import * as model from './model.js';
import weatherViewHour from './view/weatherViewHour.js';
import View from './view/View.js';
import descriptionView from './view/descriptionView.js';

const controlWeather = async function () {
  try {
    weatherViewHour.renderSpinner();
    //1. Load Current Position
    await model.loadCurrentPosition();

    //2. Load Weather Data
    await model.loadCurrentWeather();

    //3. Render Hours Weather
    weatherViewHour.render(model.state.weather);

    //4. Render Description
    descriptionView.render(model.state.weather);
  } catch (err) {
    console.error(err);
  }
};

const controlSlide = async function () {
  try {
  } catch (err) {
    console.error(err);
  }
};

const controlDots = function () {
  controlWeather();
  descriptionView.activeDots(0);
};

controlDots();
