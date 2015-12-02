var fs          = require('fs');
var q           = require('q'),
    readFile    = q.nfbind(fs.readFile);

function parseJSON(data) {
  return JSON.parse(data);
}

function count(object) {
  var floor = object.floor;
  var count = 0;
  for (var i = 0; i < floor.length; ++i) {
    (floor[i] == '(') ? count++ : count--;
  }
  return '' + count;
}

readFile('./input.json', 'utf-8')
  .then(parseJSON)
  .then(count)
  .tap(console.log)
  .done();
