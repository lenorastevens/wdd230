const rangeValue = document.getElementById("rangevalues");
const range = document.getElementById("r");

range.addEventListener("input", displayRatingValue);
range.addEventListener("change", displayRatingValue);


function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}

const thispwd = document.querySelector("#pwd");
const thispwd2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

thispwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (thispwd.value !== thispwd2.value) {
        message.textContent = "❗Passwords DO NOT MATCH";
        message.style.visibility = "visible";
        thispwd2.style.backgroundColor = "#fff0f3";
        thispwd2.value = "";
        thispwd2.focus();
    } else {
        message.style.display = "none";
        thispwd2.style.backgroundColor = "#fff";
        thispwd2.style.color = "#000";
    }
}

const emailInput = document.querySelector("#email");
const form = document.querySelector("#setup");
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}$/;

form.addEventListener("submit", function (event) {
    if (!emailRegex.test(emailInput.Value)) {
        event.preventDefault(); // Prevent form submission
        message.textContent = "❗Please enter a valid BYUI email address";
        message.style.visibility = "visible";
        emailInput.style.backgroundColor = "#fff0f3";
        emailInput.value = "";
        emailInput.focus();
    } else
        true;
});

// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}$/;
//     return emailRegex.test(email);
// }

