var fs = require('fs');

var input = "";

fs.readFile('./input.json', function(err, data) {
  input = parseJSON(data);
  console.log(input);
});

function parseJSON(data) {
  return JSON.parse(data);
}
