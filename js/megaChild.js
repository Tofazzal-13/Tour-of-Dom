
const mainContainer = document.getElementById("main_container");

const placeSection = document.createElement("section");

const h1 = document.createElement("h1");
h1.innerText = "Place I want to visit";
placeSection.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Sundorban";
const li2 = document.createElement("li");
li2.innerText = "bandorban";

ul.appendChild(li1);
// placeSection.appendChild(ul)
ul.appendChild(li2);
placeSection.appendChild(ul)

mainContainer.appendChild(placeSection)


const booksSection = document.createElement("section");

booksSection.innerHTML = `
    <h1>Books writter List</h1>
    <ul>
        <li>Humayan Ahmed</li>
        <li>Kibria</li>
        <li>Shovon</li>
    </ul>

`

mainContainer.appendChild(booksSection)

