// construct variables
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


//listen for button push/click, toggle open and closed
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});