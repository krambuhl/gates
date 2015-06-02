var Gates = require('../index.js');
var test = require('tape');

test('#or(true)', function (t) {
  t.plan(1);
  var res = Gates.or(true);
  t.equal(res, true);
});

test('#or(false)', function (t) {
  t.plan(1);
  var res = Gates.or(false);
  t.equal(res, false);
});

test('#or(true, true)', function (t) {
  t.plan(1);
  var res = Gates.or(true, true);
  t.equal(res, true);
});

test('#or(false, true)', function (t) {
  t.plan(1);
  var res = Gates.or(false, true);
  t.equal(res, true);
});

test('#or(true, false)', function (t) {
  t.plan(1);
  var res = Gates.or(true, false);
  t.equal(res, true);
});

test('#or(false, false)', function (t) {
  t.plan(1);
  var res = Gates.or(false, false);
  t.equal(res, false);
});

test('#or(true, true, true)', function (t) {
  t.plan(1);
  var res = Gates.or(true, true, true);
  t.equal(res, true);
});

test('#or(true, true, false)', function (t) {
  t.plan(1);
  var res = Gates.or(true, true, false);
  t.equal(res, true);
});

test('#or(true, false, false)', function (t) {
  t.plan(1);
  var res = Gates.or(true, false, false);
  t.equal(res, true);
});

test('#or(false, false, false)', function (t) {
  t.plan(1);
  var res = Gates.or(false, false, false);
  t.equal(res, false);
});
