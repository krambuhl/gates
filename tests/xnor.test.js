var Gates = require('../index.js');
var test = require('tape');

// 2-input
test('#xnor(true, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, true);
  t.equal(res, true);
});

test('#xnor(false, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, true);
  t.equal(res, false);
});

test('#xnor(true, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, false);
  t.equal(res, false);
});

test('#xnor(false, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, false);
  t.equal(res, true);
});

// 3-input / even generator
test('#xnor(true, true, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, true, true);
  t.equal(res, true);
});

test('#xnor(true, true, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, true, false);
  t.equal(res, false);
});

test('#xnor(true, false, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, false, true);
  t.equal(res, false);
});

test('#xnor(true, false, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(true, false, false);
  t.equal(res, true);
});

test('#xnor(false, true, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, true, true);
  t.equal(res, false);
});

test('#xnor(false, true, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, true, false);
  t.equal(res, true);
});

test('#xnor(false, false, true)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, false, true);
  t.equal(res, true);
});

test('#xnor(false, false, false)', function (t) {
  t.plan(1);
  var res = Gates.xnor(false, false, false);
  t.equal(res, false);
});
