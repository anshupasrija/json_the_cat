
const request = require("request");
const fileName = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  request(fileName + breedName, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
      return;
    }
    if (breedName !== data[0].name) {
      callback("Bread not found", null);
    }
    if (response.statusCode !== 200) {
      callback("Server responded with:" + response.statusCode, null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };



