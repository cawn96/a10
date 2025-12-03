const apiKey = "25dbac0a94b221c6760554ba9374ec36";
const city = "Vallejo";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
        );

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        document.getElementById("weather-display").innerHTML =
            `Current weather in ${data.name}: ${data.main.temp}°F, ${data.weather[0].description}. 
            Humidity: ${data.main.humidity}%`;
    } 
    catch (error) {
        document.getElementById("weather-display").innerHTML = 
            "Unable to load weather. Please try again later.";
    }
}

getWeather();
