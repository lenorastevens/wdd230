const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#current-cond');
const city = document.querySelector('#current-city');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.26&lon=-97.74&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecaset = `https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.74&cnt=24&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    captionDesc.innerHTML = `${data.weather[0].description}`;
    city.innerHTML = `${data.name}`
}

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecaset);
        if (response.ok) {
            const dataForecast = await response.json();
            console.log(dataForecast);
            displayForecastResults(dataForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();

function displayForecastResults(dataForecast) {
    const forecastList = dataForecast.list;

    // Iterate through the list array
    forecastList.forEach((forecastItem) => {
        // Extract relevant information
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week
        const minTemp = forecastItem.main.temp_min;
        const maxTemp = forecastItem.main.temp_max;
        const condition = forecastItem.weather[0].description;

        // Display the information
        console.log(`Day: ${day}`);
        console.log(`Min Temp: ${minTemp}°C`);
        console.log(`Max Temp: ${maxTemp}°C`);
        console.log(`Condition: ${condition}`);
        console.log('------------------');
    });
}

let joinBtn = document.getElementById('join');
joinBtn.addEventListener('click', function () {
    window.location.href = 'join.html';
});