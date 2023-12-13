const priceURL = "https://lenorastevens.github.io/wdd230/scoots/data/prices.json";

// fecth members data
async function getPrices() {
    try {
        const response = await fetch(priceURL);
        if (response.ok) {
            const data = await response.json();
            createTables(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function createTables(data) {

    data.prices.forEach(function (category) {

        Object.keys(category).forEach(function (vehicleType) {

            let models = category[vehicleType];

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

    // caption
    let caption = document.createElement('caption');
    caption.textContent = type;
    table.appendChild(caption);

    // header
    let thead = table.createTHead();
    let headerRow = thead.insertRow();

    let headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Model';
    headerRow.appendChild(headerCell1);

    let headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Max People';
    headerRow.appendChild(headerCell2)

    let headerCell3 = document.createElement('th');
    headerCell3.textContent = 'Half Day (3hr)';
    headerRow.appendChild(headerCell3)

    let headerCell4 = document.createElement('th');
    headerCell4.textContent = 'Full Day';
    headerRow.appendChild(headerCell4)


    // table rows
    let tbody = table.createTBody();
    models.forEach(function (model) {
        let bodyRow = tbody.insertRow();
        bodyRow.insertCell(0).textContent = model.model;
        bodyRow.insertCell(1).textContent = model['maxPersons'];
        bodyRow.insertCell(2).textContent = model[reservationType].half;
        bodyRow.insertCell(3).textContent = model[reservationType].full;
    })

    let sectionID = `${vehicleType.toLowerCase()}-price`;
    document.getElementById(sectionID).appendChild(table);
}

getPrices();