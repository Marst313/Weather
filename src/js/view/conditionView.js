import View from './View.js';

class ConditionnView extends View {
  _parentElement = document.querySelector('.container__uv-index');

  _generateMarkup() {
    this._clear();
    return `
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
      <path
        fill="currentColor"
        d="M196 128a68 68 0 1 1-68-68a68.1 68.1 0 0 1 68 68Zm-68-84a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v20a8 8 0 0 0 8 8ZM57.3 68.6a8.1 8.1 0 0 0 11.3 0a8 8 0 0 0 0-11.3L54.5 43.1a8.1 8.1 0 1 0-11.4 11.4ZM44 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h20a8 8 0 0 0 8-8Zm13.3 59.4l-14.2 14.1a8.1 8.1 0 0 0 0 11.4a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3l14.1-14.2a8 8 0 0 0-11.3-11.3ZM128 212a8 8 0 0 0-8 8v20a8 8 0 0 0 16 0v-20a8 8 0 0 0-8-8Zm70.7-24.6a8 8 0 0 0-11.3 11.3l14.1 14.2a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4ZM240 120h-20a8 8 0 0 0 0 16h20a8 8 0 0 0 0-16Zm-46.9-49.1a7.8 7.8 0 0 0 5.6-2.3l14.2-14.1a8.1 8.1 0 0 0-11.4-11.4l-14.1 14.2a8 8 0 0 0 0 11.3a7.8 7.8 0 0 0 5.7 2.3Z"
      />
    </svg>
    <p>UV INDEX</p>
    <p>${this._uvIndex()}</p>
  </div>
  <hr class="hr" />

  <!-- Winds -->
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
      <path
        fill="currentColor"
        d="M24 104a12 12 0 0 1 0-24h96a12 12 0 0 0 0-24a11.6 11.6 0 0 0-8.9 4a12 12 0 0 1-17 .9a11.9 11.9 0 0 1-.9-16.9a36 36 0 1 1 26.8 60Zm184-32a36.1 36.1 0 0 0-26.8 12a11.9 11.9 0 0 0 .9 16.9a12 12 0 0 0 17-.9a11.6 11.6 0 0 1 8.9-4a12 12 0 0 1 0 24H32a12 12 0 0 0 0 24h176a36 36 0 0 0 0-72Zm-56 88H40a12 12 0 0 0 0 24h112a12 12 0 0 1 0 24a11.6 11.6 0 0 1-8.9-4a12 12 0 0 0-17-.9a11.9 11.9 0 0 0-.9 16.9a36 36 0 1 0 26.8-60Z"
      />
    </svg>
    <p>WINDS</p>
    <p>${this._data.windspeed}Km/h</p>
  </div>
  <hr class="hr" />

  <!-- Humadity -->
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.5 15q.425 0 .713-.288q.287-.287.287-.712t-.287-.713Q7.925 13 7.5 13t-.713.287Q6.5 13.575 6.5 14t.287.712Q7.075 15 7.5 15ZM9 12q.425 0 .713-.288Q10 11.425 10 11t-.287-.713Q9.425 10 9 10t-.712.287Q8 10.575 8 11t.288.712Q8.575 12 9 12Zm0 6q.425 0 .713-.288Q10 17.425 10 17t-.287-.712Q9.425 16 9 16t-.712.288Q8 16.575 8 17t.288.712Q8.575 18 9 18Zm1.5-3q.425 0 .713-.288q.287-.287.287-.712t-.287-.713Q10.925 13 10.5 13t-.712.287Q9.5 13.575 9.5 14t.288.712q.287.288.712.288Zm0-6q.425 0 .713-.288q.287-.287.287-.712t-.287-.713Q10.925 7 10.5 7t-.712.287Q9.5 7.575 9.5 8t.288.712Q10.075 9 10.5 9Zm1.5 3q.425 0 .713-.288Q13 11.425 13 11t-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11t.288.712Q11.575 12 12 12Zm0 6q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm1.5-3q.425 0 .713-.288q.287-.287.287-.712t-.287-.713Q13.925 13 13.5 13t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm0-6q.425 0 .713-.288q.287-.287.287-.712t-.287-.713Q13.925 7 13.5 7t-.712.287Q12.5 7.575 12.5 8t.288.712Q13.075 9 13.5 9Zm1.5 3q.425 0 .713-.288Q16 11.425 16 11t-.287-.713Q15.425 10 15 10t-.712.287Q14 10.575 14 11t.288.712Q14.575 12 15 12Zm0 6q.425 0 .713-.288Q16 17.425 16 17t-.287-.712Q15.425 16 15 16t-.712.288Q14 16.575 14 17t.288.712Q14.575 18 15 18Zm1.5-3q.425 0 .712-.288q.288-.287.288-.712t-.288-.713Q16.925 13 16.5 13t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288ZM12 22q-3.425 0-5.712-2.35Q4 17.3 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.5-2.288 5.85Q15.425 22 12 22Z"
      />
    </svg>
    <p>HUMADITY</p>
    <p>${Math.ceil(this._data.humidity)}%</p>
  </div>`;
  }

  _uvIndex() {
    let uvIndex = '';
    if (this._data.uvindex < 2) {
      uvIndex = 'Low';
    } else if (this._data.uvindex >= 2 && this._data.uvindex < 6) {
      uvIndex = 'Medium';
    } else if (this._data.uvindex >= 6 && this._data.uvindex < 7) {
      uvIndex = 'High';
    } else {
      uvIndex = 'Very High';
    }

    return uvIndex;
  }
}

export default new ConditionnView();
