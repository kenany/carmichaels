var test = require('tape');

var carmichaels = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(carmichaels));
});
