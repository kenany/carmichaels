# carmichaels

[Carmichael numbers](https://en.wikipedia.org/wiki/Carmichael_number). Sourced
from OEIS [A002997][], [A006931][], and [A074379][].

## Example

``` javascript
var carmichaels = require('carmichaels');
// => [
// =>   '561',
// =>   '1105',
// =>   '1729',
// =>   ...
// =>   '349407515342287435050603204719587201',
// =>   '125861887849639969847638681038680787361',
// =>   '12758106140074522771498516740500829830401'
// => ]
```

## Installation

``` bash
$ npm install carmichaels
```

## API

``` javascript
var carmichaels = require('carmichaels');
```

### `carmichaels`

An _Array_ of Carmichael numbers. Each number is a _String_ in order to preserve
precision of those that are greater than `Number.MAX_SAFE_INTEGER`.


   [A002997]: https://oeis.org/A002997
   [A006931]: https://oeis.org/A006931
   [A074379]: https://oeis.org/A074379