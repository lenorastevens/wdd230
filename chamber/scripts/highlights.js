// construct useful url links
const baseIndexURL = "https://lenorastevens.github.io/wdd230/chamber/index.html";
const memberHighlightsURL = "https://lenorastevens.github.io/wdd230/chamber/data/members.json";


//send request for data from members.json
async function getMembersToHighlight() {
    const response = await fetch(memberHighlightsURL);
    const data = await response.json();
    // console.log(data);
    displayMemberHighlights(data.members);
}

// activate fetch request
getMembersToHighlight();


//construct desired elements from data collected
const displayMemberHighlights = (members) => {
    // get only silver and gold members
    const highlightedMembers = members.filter(member => member.memLevel === 'Silver' || member.memLevel === 'Gold');

    //call function to help display members randomly
    const selecteMembers = getRandomMembers(highlightedMembers, 2, 3);

    //get div to display highlight info
    const highlightsContainer = document.getElementById('businesses');
    highlightsContainer.innerHTML = '';

    //iterate through member list to create elements for display
    selecteMembers.forEach((member) => {
        let highlightDiv = document.createElement('div');
        let h4 = document.createElement('h4');
        let h5Address = document.createElement('h5');
        let h5Highlight = document.createElement('h5');

        //add content to new elements
        h4.textContent = member.name;
        h5Address.textContent = `${member.address[0].street}, ${member.address[0].suite}`;
        h5Highlight.textContent = member.highlight;

        //append child elements to div
        highlightDiv.appendChild(h4);
        highlightDiv.appendChild(h5Address);
        highlightDiv.appendChild(h5Highlight);

        // append divs to container for display
        highlightsContainer.appendChild(highlightDiv);
    });
}

// use builin math funcitons to select members randomly
const getRandomMembers = (highlightedMembers, min, max) => {
    const shuffled = highlightedMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
}