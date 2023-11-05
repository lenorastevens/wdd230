
document.addEventListener("DOMContentLoaded", function () {
    let rangeValue = document.getElementById("rangevalue");
    const range = document.getElementById("r");


    range.addEventListener("change", displayRatingValue);
    range.addEventListener("input", displayRatingValue);

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

});

