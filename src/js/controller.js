import * as model from './model.js';
import weatherViewHour from './view/weatherViewHour.js';
import View from './view/View.js';

const controlWeather = async function () {
  try {
    weatherViewHour.renderSpinner();
    //1. Load Current Position
    await model.loadCurrentPosition();

    //2. Load Weather Data
    await model.loadCurrentWeather();

    weatherViewHour.render(model.state.weather);

    //3. Render Hours Weather
    // weatherViewHour.render(model.state.weather);
  } catch (err) {
    console.error(err);
  }
};

controlWeather();
