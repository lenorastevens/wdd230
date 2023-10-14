const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const darkH1 = document.querySelector("#head1D");
const darkH2 = document.querySelector("#head2D");
const darkH3 = document.querySelector("#head3D");
const header = document.querySelector("#title");
const darkT = document.querySelector(".items");
const darkF = document.querySelector("footer");
const darkP1 = document.querySelector("#address");
const darkP2 = document.querySelector("#name");
const darkP3 = document.querySelector("#maps");
const darkP4 = document.querySelector("#contact");
const darkP5 = document.querySelector("#lastModified");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        body.style.background = "#000";
        body.style.color = "#000";
        modeButton.textContent = "🌞";
        modeButton.style.background = "#4F5165";
        darkH1.style.color = "#50d8d7";
        darkH2.style.color = "#50d8d7";
        darkH3.style.color = "#50d8d7";
        header.style.color = "#50d8d7";
        darkT.style.background = "#4F5165";
        darkF.style.background = "#4F5165";
        darkP1.style.color = "#50d8d7";
        darkP2.style.color = "#50d8d7";
        darkP3.style.color = "#50d8d7";
        darkP4.style.color = "#50d8d7";
        darkP5.style.color = "#50d8d7";


    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        modeButton.textContent = "🌙";
        darkH1.style.color = "#474044";
        darkH2.style.color = "#474044";
        darkH3.style.color = "#474044";
        header.style.color = "#474044";
        darkT.style.background = "#50d8d7";
        modeButton.style.background = "#50d8d7";
        darkF.style.background = "#50d8d7";
        darkP1.style.color = "#474044";
        darkP2.style.color = "#474044";
        darkP3.style.color = "#474044";
        darkP4.style.color = "#474044";
        darkP5.style.color = "#474044";
    }
});