const baseIndexURL = "https://lenorastevens.github.io/wdd230/chamber/index.html";
const memberHighlightsURL = "https://lenorastevens.github.io/wdd230/chamber/data/members.json";

async function getMembersToHighlight() {
    const response = await fetch(memberHighlightsURL);
    const data = await response.json();
    // console.log(data);
    displayMemberHighlights(data.members);
}

getMembersToHighlight();

const displayMemberHighlights = (members) => {
    const highlightedMembers = members.filter(member => member.memLevel === 'Silver' || member.memLevel === 'Gold');

    const selecteMembers = getRandomMembers(highlightedMembers, 2, 3);

    const highlightsContainer = document.getElementById('businesses');
    highlightsContainer.innerHTML = '';

    selecteMembers.forEach((member) => {
        let highlightDiv = document.createElement('div');
        let h4 = document.createElement('h4');
        let h5Address = document.createElement('h5');
        let h5Highlight = document.createElement('h5');

        h4.textContent = member.name;
        h5Address.textContent = `${member.address[0].street}, ${member.address[0].suite}`;
        h5Highlight.textContent = member.highlight;

        highlightDiv.appendChild(h4);
        highlightDiv.appendChild(h5Address);
        highlightDiv.appendChild(h5Highlight);

        highlightsContainer.appendChild(highlightDiv);
    });
}

const getRandomMembers = (highlightedMembers, min, max) => {
    const shuffled = highlightedMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
}