const tempInput = document.querySelector("#temp");
const speedInput = document.querySelector("#speed");
const windChillElement = document.querySelector("#windChill");

function calculateWindChill() {
    console.log("Function called");
    const temperature = parseFloat(tempInput.value);
    const windSpeed = parseFloat(speedInput.value);
    console.log("Temperature:", temperature);
    console.log("Wind Speed:", windSpeed);

    if (!isNaN(temperature) && !isNaN(windSpeed)) {
        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

            windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;

        } else {
            windChillElement.textContent = "Wind Chill: N/A";
        }
    }
}

tempInput.addEventListener("input", calculateWindChill);
speedInput.addEventListener("input", calculateWindChill);

