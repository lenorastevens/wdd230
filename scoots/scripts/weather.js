const urlCarmen = `https://api.openweathermap.org/data/2.5/weather?lat=20.62196&lon=-87.07643&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlPuerta = `https://api.openweathermap.org/data/2.5/weather?lat=20.47641&lon=-86.97412&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecastC = `https://api.openweathermap.org/data/2.5/forecast?lat=20.62196&lon=-87.07643&cnt=13&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecastP = `https://api.openweathermap.org/data/2.5/forecast?lat=20.47641&lon=-86.97412&cnt=13&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;

// fetch current weather API for Playa Del Carmen
async function apiCarmenFetch() {
    try {
        const response = await fetch(urlCarmen);
        if (response.ok) {
            const data = await response.json();
            displayCarmenCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for current Playa del Carmen
apiCarmenFetch();

// process current Playa del Carmen data
function displayCarmenCurrent(data) {
    const delCarmenCurr = document.getElementById('del-carmen');

    // humidity
    const carmenHumidity = document.createElement('h5');
    carmenHumidity.setAttribute('id', 'carmen-humid');
    carmenHumidity.setAttribute('class', 'description');
    carmenHumidity.textContent = `Humidity: ${data.main.humidity.toFixed()}%`;

    // current temp
    const currCarmenTemp = document.createElement('h5');
    currCarmenTemp.setAttribute('id', 'carmen-temp');
    currCarmenTemp.setAttribute('class', 'temp-display');
    currCarmenTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    // icon url
    const carmenIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // icon
    let carmenIcon = document.createElement('img');
    carmenIcon.setAttribute('src', carmenIconsrc);
    carmenIcon.setAttribute('id', 'carmen-icon');
    carmenIcon.setAttribute('alt', 'Playa Del Carmen Weather Icon');
    carmenIcon.setAttribute('width', "50");
    carmenIcon.setAttribute('height', "50");

    // icon description
    let carmenDesc = document.createElement('h5');
    carmenDesc.textContent = data.weather[0].description;
    carmenDesc.setAttribute('id', 'carmen-desc');
    carmenDesc.setAttribute('class', 'description');

    // add everything to container
    delCarmenCurr.append(carmenHumidity);
    delCarmenCurr.append(currCarmenTemp);
    delCarmenCurr.append(carmenIcon);
    delCarmenCurr.append(carmenDesc);
}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaFetch() {
    try {
        const response = await fetch(urlPuerta);
        if (response.ok) {
            const data = await response.json();
            displayPuertaCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for current Terminal Puerta Maya
apiPuertaFetch();

// process current data for Puerta Maya
function displayPuertaCurrent(data) {
    const puertaCurr = document.getElementById('puerta-maya');

    // humidity
    const puertaHumidity = document.createElement('h5');
    puertaHumidity.setAttribute('id', 'puerta-humid');
    puertaHumidity.setAttribute('class', 'description');
    puertaHumidity.textContent = `Humidity: ${data.main.humidity.toFixed()}%`;

    // current temp
    const currPuertaTemp = document.createElement('h5');
    currPuertaTemp.setAttribute('id', 'puerta-temp');
    currPuertaTemp.setAttribute('class', 'temp-display');
    currPuertaTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    // icon source
    const puertaIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // icon
    let puertaIcon = document.createElement('img');
    puertaIcon.setAttribute('src', puertaIconsrc);
    puertaIcon.setAttribute('id', 'puerta-icon');
    puertaIcon.setAttribute('alt', 'Terminal Puerta Maya Weather Icon');
    puertaIcon.setAttribute('width', "50");
    puertaIcon.setAttribute('height', "50");

    // icon description
    let puertaDesc = document.createElement('h5');
    puertaDesc.textContent = data.weather[0].description;
    puertaDesc.setAttribute('id', 'puerta-desc');
    puertaDesc.setAttribute('class', 'description');

    // add all everything to container
    puertaCurr.append(puertaHumidity);
    puertaCurr.append(currPuertaTemp);
    puertaCurr.append(puertaIcon);
    puertaCurr.append(puertaDesc);
}


// fetch forecast weather API for Playa Del Carmen
async function apiCarmenForecastFetch() {
    try {
        const response = await fetch(urlForecastC);
        if (response.ok) {
            const carmenData = await response.json();

            // get high temp for curr day
            const carmenTodayHighTemp = getCurrentDayHighTemp(carmenData);
            displayCarmenForecast(carmenData, carmenTodayHighTemp);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


// call fetch function for Playa Del Carmen
apiCarmenForecastFetch();

// process forecast data for Playa del Carmen
function displayCarmenForecast(carmenData, todayHighTemp) {
    const forcastCarmenList = carmenData.list;
    const delCarmenForecast = document.getElementById('del-carmen-forecast');
    const carmenTempsByDay = {};
    const currentCarmenDayIndex = new Date().getDay();

    let tempContainer = document.getElementById('carmen-temp-msg');
    let highTemp = document.createElement('h3')
    highTemp.setAttribute('class', 'temp-msg');
    highTemp.textContent = `Playa del Carmen: ${todayHighTemp.toFixed(0)}°F`;
    tempContainer.append(highTemp);

    forcastCarmenList.forEach((forecastItem) => {
        // Time and date info for Forecast data
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const dayIndex = date.getDay();

        // Check to see if it's next day and time is 3:00
        if (dayIndex === (currentCarmenDayIndex + 1) % 7 && date.getHours() === 15) {
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });

            // set values from data
            carmenTempsByDay[day] = {
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        }
    });

    // create container data
    for (const day in carmenTempsByDay) {
        let forecastInfo = carmenTempsByDay[day];
        const iconsrc = `https://openweathermap.org/img/wn/${forecastInfo.icon}.png`;

        // tomorrow temp
        let temps = document.createElement('h5');
        temps.setAttribute('id', 'carmen-forecast-temp');
        temps.setAttribute('class', 'temp-display');
        temps.textContent = `${forecastInfo.maxTemp.toFixed(0)}°F`;

        // tomorrow icon
        let carmenForecastIcon = document.createElement('img');
        carmenForecastIcon.setAttribute('src', iconsrc);
        carmenForecastIcon.setAttribute('id', 'tomorrow-carmen-forecast');
        carmenForecastIcon.setAttribute('alt', `${day} forecast info`);
        carmenForecastIcon.setAttribute('width', "50");
        carmenForecastIcon.setAttribute('height', "50");

        // tomorrow description
        let carmenForecastDesc = document.createElement('h5');
        carmenForecastDesc.setAttribute('id', 'carmen-forecast-desc');
        carmenForecastDesc.setAttribute('class', 'description');
        carmenForecastDesc.textContent = forecastInfo.description;

        // add all items to container
        delCarmenForecast.append(temps);
        delCarmenForecast.append(carmenForecastIcon);
        delCarmenForecast.append(carmenForecastDesc);
        break;
    }
}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaForecastFetch() {
    try {
        const response = await fetch(urlForecastP);
        if (response.ok) {
            const puertaData = await response.json();

            // get high temp for curr day
            const puertaTodayHighTemp = getCurrentDayHighTemp(puertaData);
            displayPuertaForecast(puertaData, puertaTodayHighTemp);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Terminal Puerta Maya
apiPuertaForecastFetch();

// process forecast data for Puerta Maya
function displayPuertaForecast(puertaData, todayHighTemp) {
    const puertaForecast = document.getElementById('puerta-maya-forecast');
    const forcastPuertaList = puertaData.list;
    const puertaTempsByDay = {};
    const currentPuertaDayIndex = new Date().getDay();

    // current day high temp
    let tempContainer = document.getElementById('puerta-temp-msg');
    let highTemp = document.createElement('h3')
    highTemp.setAttribute('class', 'temp-msg');
    highTemp.textContent = `Terminal Puerta Maya: ${todayHighTemp.toFixed(0)}°F`;
    tempContainer.append(highTemp);

    forcastPuertaList.forEach((forecastItem) => {
        // Time and date info for Forecast data
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const dayIndex = date.getDay();

        // check to see if it's next day and time is 3:00
        if (dayIndex === (currentPuertaDayIndex + 1) % 7 && date.getHours() === 15) {
            const day = date.toLocaleDateString('en-Us', { weekday: 'long' });

            // set values from data
            puertaTempsByDay[day] = {
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        }
    });

    // create container data
    for (const day in puertaTempsByDay) {
        let forecastInfo = puertaTempsByDay[day];
        const iconsrc = `https://openweathermap.org/img/wn/${forecastInfo.icon}.png`;

        // tomorrow temp
        let temps = document.createElement('h5');
        temps.setAttribute('id', 'puerta-forecast-temp');
        temps.setAttribute('class', 'temp-display');
        temps.textContent = `${forecastInfo.maxTemp.toFixed(0)}°F`;

        // tomorrow icon
        let puertaForecastIcon = document.createElement('img');
        puertaForecastIcon.setAttribute('src', iconsrc);
        puertaForecastIcon.setAttribute('id', 'tomorrow-puerta-forecast');
        puertaForecastIcon.setAttribute('alt', `${day} forecast info`);
        puertaForecastIcon.setAttribute('width', "50");
        puertaForecastIcon.setAttribute('height', "50");

        // tomorrow description
        let puertaForecastDesc = document.createElement('h5');
        puertaForecastDesc.setAttribute('id', 'puerta-forecast-desc');
        puertaForecastDesc.setAttribute('class', 'description');
        puertaForecastDesc.textContent = forecastInfo.description;

        // add all items to container
        puertaForecast.append(temps);
        puertaForecast.append(puertaForecastIcon);
        puertaForecast.append(puertaForecastDesc);
        break;
    }
}

function getCurrentDayHighTemp(data) {
    const today = new Date();
    const currentDayIndex = today.getDay();

    if (data.list) {
        const todayForecast = data.list.find((item) => {
            const timestamp = item.dt;
            const date = new Date(timestamp * 1000);
            const dayIndex = date.getDay();
            return dayIndex === currentDayIndex;
        });

        if (todayForecast) {
            return todayForecast.main.temp_max;
        }
    }

    return null;
}

function addCloseButton(container) {
    // create a close button
    const closeButton = document.createElement('span');
    closeButton.setAttribute('id', 'temp-close');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function () {
        container.style.display = 'none';
    });

    container.appendChild(closeButton);
}

const highTempSection = document.getElementById('high-temp');
addCloseButton(highTempSection);
