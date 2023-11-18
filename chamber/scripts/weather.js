const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('.current-cond');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.26&lon=-97.74&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecaset = `https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.74&cnt=28&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`

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

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;

    let todayDiv = document.querySelector('#today');
    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('id', 'weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    todayDiv.insertBefore(weatherIcon, todayDiv.childNodes[todayDiv.childNodes.length - 2]);

    captionDesc.textContent = `${desc}`;
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
    const forecastContainer = document.getElementById('forecast-container');

    const temperaturesByDay = {};
    let isFirstDay = true;

    // Iterate through the list array
    forecastList.forEach((forecastItem) => {
        // Extract relevant information
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week

        if (isFirstDay) {
            isFirstDay = false;
            return; //skip first day
        }

        if (!temperaturesByDay[day]) {
            temperaturesByDay[day] = {
                minTemp: forecastItem.main.temp_min,
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        } else {
            temperaturesByDay[day].minTemp = Math.min(temperaturesByDay[day].minTemp, forecastItem.main.temp_min);
            temperaturesByDay[day].maxTemp = Math.min(temperaturesByDay[day].maxTemp, forecastItem.main.temp_max);
        }
    });

    let dayCount = 0;
    for (const day in temperaturesByDay) {
        if (dayCount >= 3) {
            break;
        }


        const temperatures = temperaturesByDay[day];
        const forecastDayElement = document.createElement('div');
        forecastDayElement.classList.add('forcast-day');

        const iconsrc = `https://openweathermap.org/img/wn/${temperatures.icon}.png`;
        forecastDayElement.innerHTML = `
        <h4>${day}:</h4>
        <p>Min/Max:</p>
        <p>${temperatures.minTemp}°F/${temperatures.maxTemp}°F</p>
        <img id="forecast-icon" src="${iconsrc}" alt="Weather Icon">
        <p class="current-cond">${temperatures.description}</p>`


        forecastContainer.appendChild(forecastDayElement);

        dayCount++;
    }
}

let joinBtn = document.getElementById('join');
joinBtn.addEventListener('click', function () {
    window.location.href = 'join.html';
});