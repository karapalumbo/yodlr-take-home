const axios = require("axios");

console.log(axios);

let button = document.getElementById("button");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("clicked");
});
