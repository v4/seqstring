# Seqstring: A sequential string generator for Node.js

This module helps you to generate sequential strings, it uses the new [generator function in ES6](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/function*). 

## Installation

This module is only compatible with Node.js >= 5.x.x.

```sh
$ npm install seqstring
```

## Usage

```js
var Seqstring = require('seqstring');
```

Construct a generator, all the parameters are optional.

```js
new Seqstring([Minimum length], [Maximum length], [Array of characters]);
```

Example using a for-loop:

```js
var generator = new Seqstring(1, 5, ['a','b']);
for(var string of generator) {
  console.log(string) // e.g. aa
}
```

Example using `.next()`

```js
var generator = new Seqstring();
console.log(generator.next()); 
```