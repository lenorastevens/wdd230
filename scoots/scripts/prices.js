const priceURL = "https://lenorastevens.github.io/wdd230/scoots/data/prices.json";

// fecth members data
async function getPrices() {
    try {
        const response = await fetch(priceURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createTables(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function createTables(data) {
    // Check if 'prices' property exists in data
    if (!data || !data.prices) {
        console.error('Invalid JSON structure: "prices" property not found.');
    }

    data.prices.forEach(function (category) {
        // Check if 'category' is an object
        if (typeof category !== 'object') {
            console.error('Invalid JSON structure: Expected "category" to be an object.');
            return;
        }

        Object.keys(category).forEach(function (vehicleType) {
            // Check if 'vehicleType' is a string
            if (typeof vehicleType !== 'string') {
                console.error('Invalid JSON structure: Expected "vehicleType" to be a string.');
                return;
            }

            let models = category[vehicleType];

            // Check if 'reservationData' is an array
            if (!Array.isArray(models)) {
                console.error('Invalid JSON structure: Expected "reservationData" to be an array.');
                return;
            }

            // Create a table for reservations
            createTable('Reservations', models, vehicleType, 'reservation');

            // Create a table for walk-ins
            createTable('Walk-In', models, vehicleType, 'walk-in');
        });
    });
}

function createTable(type, models, vehicleType, reservationType) {
    let table = document.createElement('table');
    let tableClass = type.toLowerCase().replace('-', '');
    table.className = tableClass;

    // header
    let headerRow = table.insertRow(0);
    let th = document.createElement('th');
    th.textContent = type;
    th.colSpan = 4;
    headerRow.appendChild(th);

    let headerRow2 = table.insertRow(1);
    headerRow2.insertCell(0).textContent = 'Model';
    headerRow2.insertCell(1).textContent = 'Max People';
    headerRow2.insertCell(2).textContent = 'Half Day (3hr)';
    headerRow2.insertCell(3).textContent = 'Full Day';

    // table rows
    models.forEach(function (model) {
        let bodyRow = table.insertRow();
        bodyRow.insertCell(0).textContent = model.model;
        bodyRow.insertCell(1).textContent = model.maxPersons;
        bodyRow.insertCell(2).textContent = model[reservationType].half;
        bodyRow.insertCell(3).textContent = model[reservationType].full;
    })

    let sectionID = vehicleType.toLowerCase() + '-price';
    document.getElementById(sectionID).appendChild(table);
}

getPrices();