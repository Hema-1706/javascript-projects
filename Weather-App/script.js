const apiKey = "46ed7380e22c703791757f086e7bd455";

const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");

const humidity = document.getElementById("humidity");

const windSpeed = document.getElementById("windSpeed");

const errorMessage = document.getElementById("errorMessage");

async function getWeather(city) {

  try {

    errorMessage.textContent = "";

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.textContent = data.name;

    temperature.textContent =
      `Temperature: ${data.main.temp}°C`;

    description.textContent =
      `Weather: ${data.weather[0].description}`;

    humidity.textContent =
      `Humidity: ${data.main.humidity}%`;

    windSpeed.textContent =
      `Wind Speed: ${data.wind.speed} km/h`;

  }

  catch (error) {

    errorMessage.textContent = error.message;

  }

}

searchBtn.addEventListener("click", () => {

  const city = cityInput.value.trim();

  if (city !== "") {

    getWeather(city);

  }

});