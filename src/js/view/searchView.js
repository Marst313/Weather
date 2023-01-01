import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.container__current-weather');

  _generateMarkup() {
    console.log(this._data);

    this._getTime(this._data);
    return `
    <h1 class="container__current-weather__field-temp">28°</h1>

    <div class="container__current-location">
      <p class="container__current-weather__field-location">${this._data.location.locality}, ${this._data.location.city}</p>
      <svg class="container__current-weather-location-icon">
        <use href="public/image/icons.svg#icon-location "></use>
      </svg>
    </div>

    <p class="container__current-weather field-day-time">
      ${this._data.weather.day},
      <span class="field-date-time"></span>
    </p>`;
  }

  _getTime(data) {
    window.setInterval(time, 1000);

    function time() {
      const body = document.querySelector('.body');
      let fieldTimeHour = document.querySelector('.field-date-time');

      let d = new Date();
      let clock = `${d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`}:${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}:${d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`}`;

      fieldTimeHour.textContent = clock;

      const night = +data.weather.sunset.split(':').join('').slice(0, 4);
      const day = +data.weather.sunrise.split(':').join('').slice(0, 4);
      if (+clock.split(':').join('').slice(0, 4) > night) {
        body.classList.remove(`[url('/public/image/sun.jpg')]`);
      }
    }
  }
}

export default new SearchView();
