let header = document.querySelector("header");
let section = document.querySelector("section");
let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  let superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
