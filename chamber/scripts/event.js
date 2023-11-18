document.addEventListener('DOMContentLoaded', function () {
    let currentDay = new Date().getDay();
    let displayDays = [1, 2, 3, 5];

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
    });

    let closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    eventBanner.appendChild(closeButton);

    closeButton.addEventListener('click', closeEventBanner);

    eventBanner.style.display = 'block';
}

function closeEventBanner() {
    let eventBanner = document.getElementById('event-banner');
    if (eventBanner) {
        eventBanner.style.display = 'none';
    }
}