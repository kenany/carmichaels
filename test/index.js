const test = require('tape');

const carmichaels = require('../');

test('exports an array', (t) => {
  t.plan(1);
  t.ok(Array.isArray(carmichaels));
});
