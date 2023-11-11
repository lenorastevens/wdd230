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

        // let icon = document.createElement('img');
        let phoneNum = document.createElement('p');
        let memLevel = document.createElement('p');
        let website = document.createElement('a');
        website.setAttribute('href', member.url);
        website.setAttribute('target', "_blank");

        // Build the h3 content out to show the business name
        busName.textContent = `${member.name}`;


        // loop through to address to make address line
        let street = document.createElement('p');
        let suite = document.createElement('p');
        let city = document.createElement('p');
        member.address.forEach((part) => {
            street.innerHTML = `${part.street}, ${part.suite} ${part.city}, ${part.state} ${part.zipcode}`;
        });

        // building p elements
        phoneNum.textContent = `${member.phoneNumber}`;
        memLevel.textContent = `Member Level: ${member.memLevel}`;
        website.textContent = `${member.url}`;

        // Build the image portrait by setting all the relevant attributes
        // icon.setAttribute('src', );
        // icon.setAttribute('alt', ``); 
        // icon.setAttribute('loading', 'lazy');
        // icon.setAttribute('width', '340');
        // icon.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(busName);
        card.appendChild(street);
        card.appendChild(phoneNum);
        card.appendChild(website);
        card.appendChild(memLevel);

        // card.appendChild(icon);

        cards.appendChild(card);
    });
}

getMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

cards.classList.add("grid");

listbutton.addEventListener("click", () => {
    cards.classList.toggle("list");
});

gridbutton.addEventListener("click", () => {
    cards.classList.remove("list");
});