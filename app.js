// app.js
const apiKey = 'c9a3f789f2msh7362e402830e8b0p113734jsn7cc867e8925d';
const url = 'https://open-weather13.p.rapidapi.com/city/landon/ES';

async function fetchWeather() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'c9a3f789f2msh7362e402830e8b0p113734jsn7cc867e8925d',
              'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com '
            }
        });
        const data = await response.json();
        if (typeof document !== 'undefined') {
            updateWeather(data);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeather(data) {
    const weatherSection = document.getElementById('weather');
    weatherSection.innerHTML = `
        <h2>Weather Information</h2>
        <p>Temperature: ${data.temperature}</p>
        <p>Humidity: ${data.humidity}</p>
        <p>Description: ${data.description}</p>
    `;
}

if (typeof document !== 'undefined') {
    fetchWeather();
}
