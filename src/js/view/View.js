export default class View {
  _data;

  // render(data) {
  //   this._data = data;

  //   console.log(data);
  //   console.log(this._parentElement);
  //   const markup = this.generateMarkup();

  //   this._parentElement.inserAdjecentHTML('afterbegin', markup);
  // }
  render(data) {
    this._data = data;
    console.log(data);

    const markup = this._generateMarkup();
    console.log(this._parentElement);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class="loader"></div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
