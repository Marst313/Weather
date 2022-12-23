import View from './View.js';

class DescriptionView extends View {
  _parentElement = document.querySelector('.container-display__description');
  _dots = document.querySelectorAll('.dots');
  _dotsFirst = document.querySelector('.dots[data-dots="0"]');

  _generateMarkup() {
    console.log(this._data);

    return `
    <p class="display__description field-description" data-attribute="1">${this._data.description}</p>
    <p class="display__description field-description field-description__condition" data-attribute="2">${this._data.descriptionCondition}</p>
            `;
  }

  activeDots(position) {
    this._dots.forEach((el) => el.classList.add('opacity-50'));

    document.querySelector(`.dots[data-dots="${position}"]`).classList.remove('opacity-50');
  }
}

export default new DescriptionView();
