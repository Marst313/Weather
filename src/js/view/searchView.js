import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.container__current-weather');
  _searchElement = document.querySelector('.search-bar');

  _generateMarkup() {
    this._getTime(this._data);

    return `
    <h1 class="container__current-weather__field-temp">${this._celciusToFahrenheit(this._data.weather.temperature)}°</h1>

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
      let curr = +`${d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`}${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}${d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`}`.slice(0, 4);

      // Media Querry
      let x = window.matchMedia('(min-width: 768px)');

      if (curr > night) {
        body.style.backgroundImage = "url('/public/image/night.jpg')";
        body.style.backgroundPosition = '-680px -30px';
        body.style.backgroundPosition = 'top';
      } else {
        body.style.backgroundImage = "url('/public/image/sun.jpg')";
        body.style.backgroundPosition = '-970px -150px';
        body.style.backgroundPosition = `${x.matches ? 'center' : ''}`;
      }
    }
  }

  addHandlerSearch(handler) {
    this._searchElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = this._searchElement.querySelector('.search-btn').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._searchElement.querySelector('.search-btn').value = '';
  }
}

export default new SearchView();
