const city = document.querySelector('.searchBar');
const cityVal = city.value;
const search = document.querySelector('.search');
search.addEventListener('click', (e) => {
  const weather = new Weather(
    e.target.parentElement.previousElementSibling.value
  );

  weather.getWeather().then((results) => {
    console.log(results);
  });
  // .catch((err) => console.log(err));
});
