var Gates = require('../index.js');
var test = require('tape');

test('#nor(true)', function (t) {
  t.plan(1);
  var res = Gates.nor(true);
  t.equal(res, false);
});

test('#nor(false)', function (t) {
  t.plan(1);
  var res = Gates.nor(false);
  t.equal(res, true);
});

test('#nor(true, true)', function (t) {
  t.plan(1);
  var res = Gates.nor(true, true);
  t.equal(res, false);
});

test('#nor(false, true)', function (t) {
  t.plan(1);
  var res = Gates.nor(false, true);
  t.equal(res, false);
});

test('#nor(true, false)', function (t) {
  t.plan(1);
  var res = Gates.nor(true, false);
  t.equal(res, false);
});

test('#nor(false, false)', function (t) {
  t.plan(1);
  var res = Gates.nor(false, false);
  t.equal(res, true);
});

test('#nor(true, true, true)', function (t) {
  t.plan(1);
  var res = Gates.nor(true, true, true);
  t.equal(res, false);
});

test('#nor(true, true, false)', function (t) {
  t.plan(1);
  var res = Gates.nor(true, true, false);
  t.equal(res, false);
});

test('#nor(true, false, false)', function (t) {
  t.plan(1);
  var res = Gates.nor(true, false, false);
  t.equal(res, false);
});

test('#nor(false, false, false)', function (t) {
  t.plan(1);
  var res = Gates.nor(false, false, false);
  t.equal(res, true);
});
