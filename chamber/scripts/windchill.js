const tempInput = document.querySelector("#temp");
const speedInput = document.querySelector("#speed");
const windChillElement = document.querySelector("#windChill");
const urlWind = `https://api.openweathermap.org/data/2.5/weather?lat=30.26&lon=-97.74&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;

// fetch current weather API
async function apiFetchWind() {
    try {
        const response = await fetch(urlWind);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            calculateWindChill(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function
apiFetchWind();

// calculate wind chill with aquired data
function calculateWindChill(data) {
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;

    // wind chill calculation only works for temps less than 50 degrees and winds higher than 3 mph
    if (!isNaN(temperature) && !isNaN(windSpeed)) {
        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

            //sets windchill figure to be displayed
            windChillElement.textContent = `${windChill.toFixed(2)} °F`;

            // if current weather data doesn't work in equation displays this message
        } else {
            windChillElement.textContent = "N/A";
        }
    }
    // displays temp and windspeed
    tempInput.innerHTML = `${temperature.toFixed(0)}&deg;F`;
    speedInput.innerHTML = `${windSpeed.toFixed(0)} mph`;
}
