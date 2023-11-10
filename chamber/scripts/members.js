const baseURL = "https://lenorastevens.github.io/wdd230/chamber/directory.html";
const membersURL = "https://lenorastevens.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");


async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let busName = document.createElement('h2'); // fill in the blank
        // let icon = document.createElement('img');
        let phoneNum = document.createElement('p');
        let memLevel = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        busName.textContent = `${member.name}`; // fill in the blank

        // building p elements
        phoneNum.textContent = `${member.phoneNumber}`;
        memLevel.textContent = `Member Level: ${member.memLevel}`;
        // Build the image portrait by setting all the relevant attributes
        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(busName); //fill in the blank
        card.appendChild(phoneNum);
        card.appendChild(memLevel);
        // card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getMembers();