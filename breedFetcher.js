const args = process.argv.slice(2);
const request = require("request");

const fileName = "https://api.thecatapi.com/v1/breeds/search?q=";
request(fileName + args[0], (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0]);
  if (error !== null) {
    console.log("error");
    return;
  }
  if (args[0] !== data.name) {
    console.log("Breed not found");
  }
});
