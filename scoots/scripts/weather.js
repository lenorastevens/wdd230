// const condContainer = document.querySelector('.location-info');
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