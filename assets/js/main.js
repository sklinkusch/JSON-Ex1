// Define parts of the DOM
let header = document.querySelector("header");
let section = document.querySelector("section");
// Set up network source
let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
// request.responseType = "json";
// request.send();
// // Function to execute when the page is loading
// request.onload = function() {
//   let superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// };
fetch(requestURL)
  .then(response => {
    return response.json();
  }).then(data => {
    populateHeader(data);
    showHeroes(data);
  }).catch(function (err) {
    console.log("Something went wrong");
  });
// Fill up the header
function populateHeader(jsonObj) {
  let myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  let myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${jsonObj["homeTown"]} // Formed:  ${
    jsonObj["formed"]
    }`;
  header.appendChild(myPara);
}

// Fill up the section
function showHeroes(jsonObj) {
  let heroes = jsonObj["members"];
  for (let i = 0; i < heroes.length; i++) {
    let myArticle = document.createElement("article");
    let myH2 = document.createElement("h2");
    let myPara1 = document.createElement("p");
    let myPara2 = document.createElement("p");
    let myPara3 = document.createElement("p");
    let myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = `Secret Identity: ${heroes[i].secretIdentity}`;
    myPara2.textContent = `Age: ${heroes[i].age}`;
    myPara3.textContent = "Superpowers: ";

    let superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
