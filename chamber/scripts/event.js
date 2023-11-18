document.addEventListener('DOMContentLoaded', function () {
    let currentDay = new Date().getDay();
    let displayDays = [1, 2, 3];

    if (displayDays.includes(currentDay)) {
        displayEventBanner();
    }
});

function displayEventBanner() {
    let eventBanner = document.getElementById('event-banner');

    let bannerWords = ['Chamber Meeting', 'on Wednesday', 'at 7:00 PM'];

    bannerWords.forEach(function (word) {
        let pElement = document.createElement('p');
        pElement.classList.add('moving-word');
        pElement.textContent = word;
        eventBanner.appendChild(pElement);
    })

    eventBanner.style.display = 'block';
}