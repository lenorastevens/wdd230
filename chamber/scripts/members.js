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
        card.setAttribute('class', 'dircard');
        let busName = document.createElement('h3');
        busName.setAttribute('class', 'head3D');

        // let icon = document.createElement('img');
        let phoneNum = document.createElement('p');
        let memLevel = document.createElement('p');
        let website = document.createElement('a');
        website.setAttribute('href', member.url);
        website.setAttribute('target', "_blank");

        // Build the h3 content out to show the business name
        busName.textContent = `${member.name}`;

        // building p elements
        phoneNum.textContent = `${member.phoneNumber}`;
        memLevel.textContent = `Member Level: ${member.memLevel}`;
        website.textContent = `${member.url}`;
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
        card.appendChild(website);
        // card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getMembers();