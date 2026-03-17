const button = document.getElementById("button");
const cityInput = document.getElementById("cityInput");

button.addEventListener("click", displayWeather);

async function getWeather(cityname) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=b7a7e173bfce4fd990a172821240812&q=${cityname}&aqi=yes`);
    return await data.json();
}

async function displayWeather() {
    const cityname = cityInput.value;
    if (!cityname.trim()) return; // Don't proceed if input is empty

    try {
        const weatherData = await getWeather(cityname);
        const country = weatherData.location.country;
        const temp = weatherData.current.temp_c;
        const pm2_5 = weatherData.current.air_quality.pm2_5;

        // Remove existing weather info if present
        const existingWeather = document.querySelector('.weather-info');
        if (existingWeather) {
            existingWeather.remove();
        }

        // Create weather info section
        const weatherInfo = document.createElement('div');
        weatherInfo.className = 'weather-info';
        weatherInfo.innerHTML = `
            <h1>Weather in ${cityname}, ${country}</h1>
            <div class="weather-data">
                <div class="weather-item">
                    <h2>Temperature: ${temp}°C</h2>
                </div>
                <div class="weather-item">
                    <h2>PM2.5: ${pm2_5}</h2>
                </div>
            </div>
        `;

        // Append to container
        const container = document.querySelector('.container');
        container.appendChild(weatherInfo);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // You could add error handling UI here
    }
}