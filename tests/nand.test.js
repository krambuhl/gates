var Gates = require('../index.js');
var test = require('tape');

test('#nand(true)', function (t) {
  t.plan(1);
  var res = Gates.nand(true);
  t.equal(res, false);
});

test('#nand(false)', function (t) {
  t.plan(1);
  var res = Gates.nand(false);
  t.equal(res, true);
});

test('#nand(true, true)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, true);
  t.equal(res, false);
});

test('#nand(false, true)', function (t) {
  t.plan(1);
  var res = Gates.nand(false, true);
  t.equal(res, true);
});

test('#nand(true, false)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, false);
  t.equal(res, true);
});

test('#nand(false, false)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, false);
  t.equal(res, true);
});

test('#nand(true, true, true)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, true, true);
  t.equal(res, false);
});

test('#nand(true, true, false)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, true, false);
  t.equal(res, true);
});

test('#nand(true, false, false)', function (t) {
  t.plan(1);
  var res = Gates.nand(true, false, false);
  t.equal(res, true);
});

test('#nand(false, false, false)', function (t) {
  t.plan(1);
  var res = Gates.nand(false, false, false);
  t.equal(res, true);
});
