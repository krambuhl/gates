var Gates = require('../index.js');
var test = require('tape');

// 2-input
test('#xor(true, true)', function (t) {
  t.plan(1);
  // (xor 1 1) == 0
  var res = Gates.xor(true, true);
  t.equal(res, false);
});

test('#xor(false, true)', function (t) {
  t.plan(1);
  // (xor 0 1) == 1
  var res = Gates.xor(false, true);
  t.equal(res, true);
});

test('#xor(true, false)', function (t) {
  t.plan(1);
  // (xor 1 0) == 1
  var res = Gates.xor(true, false);
  t.equal(res, true);
});

test('#xor(false, false)', function (t) {
  t.plan(1);
  // (xor 0 0) == 0
  var res = Gates.xor(false, false);
  t.equal(res, false);
});

// 3-input / odd generator
test('#xor(true, true, true)', function (t) {
  t.plan(1);
  // (xor 1 1 1) == 1
  var res = Gates.xor(true, true, true);
  t.equal(res, true);
});

test('#xor(true, true, false)', function (t) {
  t.plan(1);
  // (xor 1 1 0) == 0
  var res = Gates.xor(true, true, false);
  t.equal(res, false);
});

test('#xor(true, false, true)', function (t) {
  t.plan(1);
  // (xor 1 0 1) == 0
  var res = Gates.xor(true, false, true);
  t.equal(res, false);
});

test('#xor(true, false, false)', function (t) {
  t.plan(1);
  // (xor 1 0 0) == 1
  var res = Gates.xor(true, false, false);
  t.equal(res, true);
});

test('#xor(false, true, true)', function (t) {
  t.plan(1);
  // (xor 0 1 1) == 0
  var res = Gates.xor(false, true, true);
  t.equal(res, false);
});

test('#xor(false, true, false)', function (t) {
  t.plan(1);
  // (xor 0 1 0) == 1
  var res = Gates.xor(false, true, false);
  t.equal(res, true);
});

test('#xor(false, false, true)', function (t) {
  t.plan(1);
  // (xor 0 0 1) == 1
  var res = Gates.xor(false, false, true);
  t.equal(res, true);
});

test('#xor(false, false, false)', function (t) {
  t.plan(1);
  // (xor 0 0 0) == 0
  var res = Gates.xor(false, false, false);
  t.equal(res, false);
});
