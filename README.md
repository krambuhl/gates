# Gates

Gates defines logic gates function for composing more complex functions.

## Functions

- Gates.not
- Gates.or
- Gates.and
- Gates.nor
- Gates.nand
- Gates.xor
- Gates.xnor

## Example

```js
var isEven = function(n) { return n % 2 === 0 }
var isNotEven = Gates.not(isEven);

isEven(10); // true
isNotEven(10); // false

var isDivisibleBy3 = function(n) { return n % 3 === 0 }
var isNotEvenAndDivisibleBy3 = Gate.and(isNotEven, isDivisibleBy3)

isNotEvenAndDivisibleBy3(10) // false
isNotEvenAndDivisibleBy3(12) // true
```
