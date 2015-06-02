var Gates = require('../index.js');
var test = require('tape');

test('#and(true)', function (t) {
  t.plan(1);
  var res = Gates.and(true);
  t.equal(res, true);
});

test('#and(false)', function (t) {
  t.plan(1);
  var res = Gates.and(false);
  t.equal(res, false);
});

test('#and(true, true)', function (t) {
  t.plan(1);
  var res = Gates.and(true, true);
  t.equal(res, true);
});

test('#and(false, true)', function (t) {
  t.plan(1);
  var res = Gates.and(false, true);
  t.equal(res, false);
});

test('#and(true, false)', function (t) {
  t.plan(1);
  var res = Gates.and(true, false);
  t.equal(res, false);
});

test('#and(false, false)', function (t) {
  t.plan(1);
  var res = Gates.and(true, false);
  t.equal(res, false);
});

test('#and(true, true, true)', function (t) {
  t.plan(1);
  var res = Gates.and(true, true, true);
  t.equal(res, true);
});

test('#and(true, true, false)', function (t) {
  t.plan(1);
  var res = Gates.and(true, true, false);
  t.equal(res, false);
});

test('#and(true, false, false)', function (t) {
  t.plan(1);
  var res = Gates.and(true, false, false);
  t.equal(res, false);
});

test('#and(false, false, false)', function (t) {
  t.plan(1);
  var res = Gates.and(false, false, false);
  t.equal(res, false);
});
