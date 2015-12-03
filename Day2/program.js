var fs          = require('fs');
var q           = require('q'),
    readFile    = q.nfbind(fs.readFile);

function parseJSON(data) {
  return JSON.parse(data);
}

function count(object) {
  var floor = object.floor;
  var basementIndex = null;
  var count = 0;
  for (var i = 0; i < floor.length; ++i) {
    (floor[i] == '(') ? count++ : count--;
    if (!basementIndex && count < 0) basementIndex = i + 1;
  }
  return 'Floor is ' + count + ' and basement index is ' + basementIndex;
}

readFile('./input.json', 'utf-8')
  .then(parseJSON)
  .then(count)
  .tap(console.log)
  .done();
