import * as model from './model.js';

const controlLocation = async function () {
  try {
    await model.loadCurrentPosition();
    await model.loadCurrentWeather();

    console.log(model.state);
  } catch (err) {
    console.error(err);
  }
};

controlLocation();
