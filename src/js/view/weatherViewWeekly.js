import View from './View.js';

class WeatherViewWeekly extends View {
  _parentElement = document.querySelector('.container__weeks-list');

  constructor() {
    super();
  }

  _generateMarkup() {
    let d = new Date();
    let day = d.getDay();

    const nameDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = 0;
    let thisDay = 0;

    let sunset = +this._data.sunset.split(':').join('').slice(0, 4);
    let sunrise = +this._data.sunrise.split(':').join('').slice(0, 5);

    // Current Date
    if (this._getTime() > sunset && this._getTime() < sunrise);

    this._getTime();

    const data = this._data.weekly
      .map((el, i) => {
        if (i < 7) {
          return `<li class="container__weeks-items" data-attributes="${thisDay++}">
      <p>${day < 7 ? nameDay[day++] : nameDay[currentDay++]}</p>

      <div class="flex ">
        <svg class="weather-icon ">
          <use href="public/image/icons.svg#icon-water "></use>
        </svg>
        <span class="humidity__weekly">${Math.ceil(el.humidity)}%</span>
      </div>


      <div class="container__weeks-icons">
        <svg class="weeks__icons">
          <use href="public/image/icons.svg#icon-${el.icon}"></use>
        </svg>

        <svg class="weeks__icons">
          <use href="public/image/icons.svg#icon-${this._getTime() > sunset && this._getTime() < sunrise ? 'partly-cloudy-night' : 'partly-cloudy-day'}"></use>
        </svg>
      </div>


      <div class="container__weeks-temp">
        <p>${this._celciusToFahrenheit(el.feelslikemax)}°</p>
        <p>${this._celciusToFahrenheit(el.feelslikemin)}°</p>
      </div>
    </li>`;
        }
      })
      .join('');

    return data;
  }

  markingCurrentDay() {
    const allContainer = document.querySelectorAll('.container__weeks-items');
    allContainer.forEach((el) => {
      if (!el.dataset.attributes) return;

      if (el.dataset.attributes === '0') el.classList.add('weekly-active');
    });

    this._generateTimeSun();
  }

  _generateTimeSun() {
    const sunsContainer = document.querySelectorAll('.field__sun-datetime');
    sunsContainer[0].textContent = this._data.sunrise;
    sunsContainer[1].textContent = this._data.sunset;
  }

  _getTime() {
    let d = new Date();
    let clock = +`${d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`}${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}${d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`}`.slice(0, 4);

    return clock;
  }
}

export default new WeatherViewWeekly();

// const nameDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
