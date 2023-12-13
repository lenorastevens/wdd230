// url to json file of countries
const countryURL = "https://lenorastevens.github.io/wdd230/scoots/data/countries.json"

// fetch request for countries file
async function getCountry() {
    try {
        const response = await fetch(countryURL);
        if (response.ok) {
            const data = await response.json();
            createCountries(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call to initiate request
getCountry();

// function to process data
function createCountries(data) {
    // variable to add data to
    const stateSelect = document.getElementById('country');

    // start with empty value
    stateSelect.innerHTML = '';

    // creating the option element, value, default value and adding to select list
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select';
    stateSelect.add(defaultOption);

    // loop through data to add all countries to the select list
    for (const abbreviation in data) {
        const optionElement = document.createElement('option');
        optionElement.value = abbreviation;
        optionElement.text = data[abbreviation];
        stateSelect.add(optionElement);
    }
}

