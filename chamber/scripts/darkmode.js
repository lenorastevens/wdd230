// create a function to swich specific elements to dark mode colors
function darkMode() {
    // create variables to select the specific elements that need to change
    const body = document.body;
    const darkT = document.querySelector(".items");
    const darkHT = document.querySelector("#title");
    const darkF = document.querySelector("footer");
    const darkH1 = document.querySelector("#head1D");
    const darkH2 = document.querySelector("#head2D");
    const darkH3 = document.querySelector("#head3D");
    const logoB = document.querySelector("#logo");
    const mapLink = document.querySelector("#maps");

    //assign the variables to the right CSS style setting
    body.classList.toggle("dark-mode");
    darkT.classList.toggle("darkHF")
    darkHT.classList.toggle("darkHF");
    logoB.classList.toggle("logo-dark")
    darkH1.classList.toggle("dark-mode");
    darkH2.classList.toggle("dark-mode");
    darkH3.classList.toggle("dark-mode");
    darkF.classList.toggle("darkHF");
    mapLink.classList.toggle("darkHF");

}
