const logo = document.querySelector('.logo');

console.log(logo);

logo.insertAdjacentHTML(
  'afterbegin',
  ` 
<li class="items__day">
  <p>14</p>
    <svg class="weather-icon">
      <use href="public/image/icons.svg#icon-lightning__rainy "></use>
    </svg>
  <p class="font-bold">28°</p>
  <div class="container__weather-icon">
    <svg class="weather-icon">
      <use href="public/image/icons.svg#icon-water "></use>
      <span>94%</span>
    </svg>
  </div>
</li>
<hr class="line__days" />`
);
