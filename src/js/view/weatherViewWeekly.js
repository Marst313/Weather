import View from './View.js';

class WeatherViewWeekly extends View {
  _parentElement = document.querySelector('.container-display__description');

  _generateMarkup() {}
}

export default new WeatherViewWeekly();
