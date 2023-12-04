const condContainer = document.querySelector('.location-info');
// const forecastContainer = document.querySelector('.location-forecast');
const urlCarmen = `https://api.openweathermap.org/data/2.5/weather?lat=20.6274&lon=-87.0799&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlPuerta = `https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecasetC = `https://api.openweathermap.org/data/2.5/forecast?lat=20.6274&lon=-87.0799&cnt=28&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecasetP = `https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&cnt=28&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;

// fetch current weather API for Playa Del Carmen
async function apiCarmenFetch() {
    try {
        const response = await fetch(urlCarmen);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCarmenCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Playa Del Carmen
apiCarmenFetch();

function displayCarmenCurrent(data) {
    const delCarmenCurr = document.getElementById('del-carmen');

    const currCarmenTemp = document.createElement('h5');
    currCarmenTemp.setAttribute('id', 'carmen-temp');
    currCarmenTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    const carmenIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    let carmenIcon = document.createElement('img');
    carmenIcon.setAttribute('src', carmenIconsrc);
    carmenIcon.setAttribute('id', 'carmen-icon');
    carmenIcon.setAttribute('alt', 'Playa Del Carmen Weather Icon');
    carmenIcon.setAttribute('width', "50");
    carmenIcon.setAttribute('height', "50");

    let carmenDesc = document.createElement('h5');
    carmenDesc.textContent = data.weather[0].description;
    carmenDesc.setAttribute('id', 'carmen-desc');

    delCarmenCurr.append(currCarmenTemp);
    delCarmenCurr.append(carmenIcon);
    delCarmenCurr.append(carmenDesc);

    console.log(currCarmenTemp);

}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaFetch() {
    try {
        const response = await fetch(urlPuerta);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayPuertaCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Terminal Puerta Maya
apiPuertaFetch();

function displayPuertaCurrent(data) {
    const puertaCurr = document.getElementById('puerta-maya');

    const currPuertaTemp = document.createElement('h5');
    currPuertaTemp.setAttribute('id', 'puerta-temp');
    currPuertaTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    const puertaIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    let puertaIcon = document.createElement('img');
    puertaIcon.setAttribute('src', puertaIconsrc);
    puertaIcon.setAttribute('id', 'puerta-icon');
    puertaIcon.setAttribute('alt', 'Terminal Puerta Maya Weather Icon');
    puertaIcon.setAttribute('width', "50");
    puertaIcon.setAttribute('height', "50");

    let puertaDesc = document.createElement('h5');
    puertaDesc.textContent = data.weather[0].description;
    puertaDesc.setAttribute('id', 'puerta-desc');

    puertaCurr.append(currPuertaTemp);
    puertaCurr.append(puertaIcon);
    puertaCurr.append(puertaDesc);
    console.log(puertaCurr);
}


// fetch forecast weather API for Playa Del Carmen
async function apiCarmenForecastFetch() {
    try {
        const response = await fetch(urlForecasetC);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCarmenForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Playa Del Carmen
apiCarmenForecastFetch();

function displayCarmenForecast(data) {

}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaForecast() {
    try {
        const response = await fetch(urlForecasetP);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayPuertaForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Terminal Puerta Maya
apiPuertaForecast();

function displayPuertaForecast(data) {

}