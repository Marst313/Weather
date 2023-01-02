export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="loader">
        <div class="snow">
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:15"></span>
            <span style="--i:17"></span>
            <span style="--i:18"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:10"></span>
            <span style="--i:18"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:10"></span>
            <span style="--i:18"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
            <span style="--i:10"></span>
        </div>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
    <div role="alert" class="absolute top-0  mx-auto bg-red-50 left-[50%]">
    <div class="rounded-t bg-red-500 px-4 py-2 font-bold text-white">Error</div>
    <div class="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <p>${message}</p>
    </div>
  </div>`;
    this._parentElement.insertAdjacentHTML('beforebegin', markup);
  }

  _celciusToFahrenheit(value) {
    value = ((value - 32) * 5) / 9;
    return Math.ceil(value);
  }
}
