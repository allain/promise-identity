var test = require('blue-tape');

var id = require('..');

test('works in simple case', function(t) {
  return id(10).then(function(value){
    t.equal(value, 10);
  });
});

test('works when value is undefined', function(t) {
  return id(undefined).then(function(value) {
    t.equal(value, undefined);
  });
});

