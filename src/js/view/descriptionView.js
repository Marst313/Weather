import View from './View.js';

class DescriptionView extends View {
  _parentElement = document.querySelector('.container-display__description');

  _dots = document.querySelectorAll('.dots');
  _dotsFirst = document.querySelector('.dots[data-dots="0"]');

  _generateMarkup() {
    console.log(this._data);

    return `
    <p class="display__description field-description active " data-attribute="0">${this._data.description}</p>
    <p class="display__description field-description field-description__condition " data-attribute="1">${this._data.descriptionCondition}</p>
            `;
  }

  activeDots(position) {
    this._dots.forEach((el) => el.classList.add('opacity-50'));

    document.querySelector(`.dots[data-dots="${position}"]`).classList.remove('opacity-50');
  }

  _slideDescription(element) {
    const desc = this._parentElement.childNodes;
    desc.forEach((el) => {
      if (!el.dataset) return;

      el.classList.remove('active');

      if (el.dataset.attribute === element.target.dataset.dots) el.classList.add('active');
    });
  }

  addHandlerEvent() {
    this._dots.forEach((el) =>
      el.addEventListener('click', (dot) => {
        this._slideDescription(dot);
        return this.activeDots(dot.target.dataset.dots);
      })
    );
  }
}

export default new DescriptionView();
