const baseURL = "https://lenorastevens.github.io/wdd230/";
const linksURL = "https://lenorastevens.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}


// create card and set attributes for section
let card = document.createElement('section');
card.setAttribute('id', "card1");
card.setAttribute('class', "card");

// create header in card
let cardTitle = document.createElement('h3');
cardTitle.textContent = "Learning Activities";

// append header to card
card.appendChild(cardTitle);

// create an unordered list for lessons
let weeks = document.createElement('ul');
weeks.setAttribute('id', "lessons");

// loop through json data and create ul list for lessons
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // get container and declare insert order
        const container = document.getElementById('container');
        container.insertBefore(card, container.firstChild);

        // create li for lesson, set attributes and text content
        let week = document.createElement('li');
        week.textContent = `Week ${lesson.lesson}: `;
        week.setAttribute('id', `lesson${lesson.lesson}`);
        week.setAttribute('class', "lessons")

        // loop through links list and create a element for each lesson link
        lesson.links.forEach((link) => {
            let lessonLink = document.createElement('a');
            lessonLink.setAttribute('id', link.title);
            lessonLink.setAttribute('class', 'lesson');
            lessonLink.setAttribute('href', link.url);
            lessonLink.setAttribute('target', "_blank");
            lessonLink.innerHTML = link.title;

            // append links to week list item
            week.appendChild(lessonLink);
        });

        // append week (with links) to weeks ul
        weeks.append(week);

    });

    // append weeks to card
    card.appendChild(weeks);
}

getLinks();