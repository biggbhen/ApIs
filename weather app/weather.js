class Weather {
  constructor(city) {
    this.city = city;
    this.api_key = '625eae4c8d00e7a79391d77df50c759a';
  }
  // get weather
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${this.api_key}`
    );
    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
  }
}
