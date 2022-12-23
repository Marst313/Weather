import View from './View.js';

class WeatherViewHour extends View {
  _parentElement = document.querySelector('.container__day-list');

  _celciusToFahrenheit(value) {
    value = ((value - 32) * 5) / 9;
    return Math.ceil(value);
  }

  _generateMarkup() {
    const data = this._data.hoursWeather
      .map((el) => {
        return `<li class="items__day">
      <p>${el.datetime.slice(0, -3)}</p>
        <svg class="weather-icon">
          <use href="public/image/icons.svg#icon-${el.icon} "></use>
        </svg>
      <p class="font-bold">${this._celciusToFahrenheit(el.temp)}°</p>
      <div class="container__weather-icon">
        <svg class="weather-icon">
          <use href="public/image/icons.svg#icon-water "></use>
          <span>${Math.ceil(el.humidity)}%</span>
        </svg>
      </div>
  </li>
  <hr class="line__days" />`;
      })
      .join('');

    return data;
  }
}

export default new WeatherViewHour();
