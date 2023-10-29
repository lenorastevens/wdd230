// Gets a date and put the year in the footer field
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();


// Gets and sets the last time the document was modified
const date = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = date;


// Time stamp and visitor message
document.addEventListener("DOMContentLoaded", function () {
    const daysElement = document.querySelector(".visitor");
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (!lastVisitDate) {
        daysElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const storedDate = new Date(lastVisitDate);

        const timeDifference = currentDate - storedDate;

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 1) {
            daysElement.textContent = "You last visited 1 day ago.";
        } else if (daysDifference < 1) {
            daysElement.textContent = "Back so soon! Awesome!";
        } else {
            daysElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem("lastVisitDate", currentDate.toString());
})


// Programs and tracks number of time page is visited
const visitsDisplay = document.querySelector(".visits")

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit ❣`
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);