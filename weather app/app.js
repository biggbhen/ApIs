const city = document.querySelector('.searchBar');
const search = document.querySelector('.search');
const h1 = document.querySelector('.city');
const icon = document.querySelector('.icon');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const weatherType = document.querySelector('.typeOfWeather');
search.addEventListener('click', (e) => {
  const weather = new Weather(city.value);

  weather
    .getWeather()
    .then((results) => {
      console.log(results.main.humidity);
      h1.textContent = `Weather in ${results.name} ${results.sys.country}`;
      wind.textContent = `Wind speed: ${results.wind.speed}km/h`;
      icon.src = `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`;
      weatherType.textContent = results.weather[0].description;
      temp.textContent = `${results.main.temp}° C`;
      humidity.textContent = `humidity: ${results.main.humidity}%`;
    })
    .catch((err) => alert('Error not found'));
});
