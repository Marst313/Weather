import View from './View.js';

class MapView extends View {
  #map;
  #mapZoomLevel = 17;
  _parentElement = document.querySelector('#map');

  _generateMarkup() {
    this._clear();

    this._getPosition();
  }

  _getPosition() {
    //! 1.) Using geolocation API

    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert('Could not get your position');
      });
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // To set your current position
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 100,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: 'yourPosition',
        })
      )
      .setPopupContent('You Are Here')
      .openPopup();
  }
}

export default new MapView();
