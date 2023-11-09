const baseURL = "https://lenorastevens.github.io/wdd230/";
const linksURL = "https://lenorastevens.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.links);
    // displayLinks(data.links);
}

const displayLinks = (links) => {
    links.forEach((link) => {
        let



    });

}

getLinks();