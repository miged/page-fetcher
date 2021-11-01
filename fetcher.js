const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  if (response && response.statusCode === 200) {
    console.log("Found website", args[0]);
    writeFile(body);
  } else {
    console.log("Error: Could not get contents of", args[0]);
  }
});

const writeFile = (content) => {
  console.log("Saving contents to", args[1]);
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
