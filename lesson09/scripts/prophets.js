const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

let data = null;
async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        displayProphets(data.prophets);
    }

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let protrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        protrait.setAttribute('src', prophet.imageurl);
        protrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        protrait.setAttribute('loading', 'lazy');
        protrait.setAttribute('width', '340');
        protrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(protrait);

        cards.appendChild(card);

    });
}

getProphetData();