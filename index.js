var komposit = require('komposit');

var gates = {
  not: function not(val) { return !val; },
  and: function and() {
    var i = 0;
    while(arguments.length > i) if (!arguments[i++]) return false;
    return true;
  },
  or: function or() {
    var i = 0;
    while(arguments.length > i) if (arguments[i++]) return true;
    return false;
  },
  xor: function xor() {
    var tape = arguments[0], i = 1;
    while (arguments.length > i) tape = tape !== arguments[i++];
    return tape;
  },
  xnor: function xnor() {
    var tape = arguments[0], i = 1;
    while (arguments.length > i) tape = tape === arguments[i++];
    return tape;
  }
};

gates.nand = komposit(gates.and, gates.not),
gates.nor = komposit(gates.or, gates.not),

module.exports = gates;
