const baseURL = "https://lenorastevens.github.io/wdd230/";
const linksURL = "https://lenorastevens.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}


// create card and set attributes
let card = document.createElement('section');
card.setAttribute('id', "card1");
card.setAttribute('class', "card");

// create header in card
let cardTitle = document.createElement('h3');
cardTitle.textContent = "Learning Activities";

// append header to card
card.appendChild(cardTitle);

// loop through json data and create ul list for lessons
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // ul list for lesson, set attributes and text content
        let weeks = document.createElement('ul');
        weeks.textContent = `Week ${lesson.lesson}: `;
        weeks.setAttribute('id', "lessons");

        // loop through links list and create a element for each link
        lesson.links.forEach((link) => {
            let lessonLink = document.createElement('a');
            lessonLink.setAttribute('class', 'lesson');
            lessonLink.setAttribute('href', link.url);
            lessonLink.setAttribute('target', "_blank");
            lessonLink.innerHTML = link.title;

            // append links to week list item
            weeks.appendChild(lessonLink);
        });

        // append week to card
        card.appendChild(weeks);

        // append card to container in html
        container.appendChild(card);

    });

}

getLinks();