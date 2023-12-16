const apiKeys = "2535c3de4b1dda955e78d0f9f7760d3b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".searchfild input");
const searchButton = document.querySelector(".searchfild button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKeys}`);

    if(response.status === 404) {
        document.querySelector(".error-msg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clear") {
            weatherIcon.src="images/clear.png";
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src="images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src="images/rain.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src="images/snow.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src="images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src="images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error-msg").style.display = "none";
    }

}

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    getWeather(city);
})
