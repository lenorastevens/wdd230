document.addEventListener('DOMContentLoaded', function () {
    let currentDay = new Date().getDay();
    let displayDays = [1, 2, 3];

    if (displayDays.includes(currentDay)) {
        displayEventBanner();
    }
});

function displayEventBanner() {
    let eventBanner = document.getElementById('event-banner');

    eventBanner.innerHTML = '<p>Chamber Meeting on Wednesday at 7:00 PM';
    eventBanner.style.display = 'block';
}