var Gates = require('../index.js');
var test = require('tape');

test('#not(true)', function (t) {
  t.plan(1);
  var res = Gates.not(true);
  t.equal(res, false);
});

test('#not(false)', function (t) {
  t.plan(1);
  var res = Gates.not(false);
  t.equal(res, true);
});
