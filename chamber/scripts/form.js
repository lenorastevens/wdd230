document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get the current timestamp in milliseconds
    var timestamp = new Date().getTime();

    // Set the timestamp value in the hidden input field
    document.getElementById("timestamp").value = timestamp;


});