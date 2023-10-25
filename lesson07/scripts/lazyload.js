const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const date = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = date;
