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
            console.log(data);
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

function calculateWindChill(data) {
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;

    if (!isNaN(temperature) && !isNaN(windSpeed)) {
        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

            windChillElement.textContent = `${windChill.toFixed(2)} °F`;

        } else {
            windChillElement.textContent = "N/A";
        }
    }
    tempInput.innerHTML = `${temperature.toFixed(0)}&deg;F`;
    speedInput.innerHTML = `${windSpeed.toFixed(0)} mph`;
}
