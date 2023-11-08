// create a function to swich specific elements to dark mode colors
function darkMode() {
    // create variables to select the specific elements that need to change
    const body = document.body;
    const darkT = document.querySelector(".items");
    const darkHT = document.querySelector("#title");
    const logoB = document.querySelector("#logo");
    const darkA = document.querySelector("#classHome");

    //assign the variables to the right CSS style setting
    body.classList.toggle("dark-mode");
    darkT.classList.toggle("darkHF")
    darkHT.classList.toggle("darkHF");
    logoB.classList.toggle("logo-dark")
    darkA.classList.toggle("darkHF");


    // all the H2 headers
    const darkH2 = document.querySelectorAll("h2.head2D");
    darkH2.forEach(element => {
        element.classList.toggle("dark-mode");
    })

    // all the h3 headers
    const darkH3 = document.querySelectorAll("h3.head3D");
    darkH3.forEach(element => {
        element.classList.toggle("dark-mode");
    })


    // all the footer elements
    const darkF = document.querySelector("footer");
    darkF.classList.toggle("darkHF");

    const darkP = document.querySelectorAll("footer p");
    darkP.forEach(element => {
        element.classList.toggle("darkHF");

        const link = element.querySelector("a");
        if (link) {
            link.classList.toggle("darkHF");
        }
    });


}
