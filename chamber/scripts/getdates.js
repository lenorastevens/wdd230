// Get year for footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// get last modified info for footer
const date = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = date;
