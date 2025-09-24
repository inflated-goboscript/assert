# assert.gs

> assert certain conditions, if not true, give an error

[![Run /test/](https://github.com/inflated-goboscript/assert/actions/workflows/gstest.yml/badge.svg)](https://github.com/inflated-goboscript/assert/actions/workflows/gstest.yml)

This is a assertion library which is built for [goboscript](https://github.com/aspizu/goboscript).
 It is based on [the stdlib implementation](https://github.com/goboscript/std/), but it is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- aspizu for original version in stdlib

## Installation

Install from the GTP.
`inflate install assert`

Add `assert` to your `inflator.toml` config:
```toml
[dependencies]
# ...
assert = "assert"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/inflated-goboscript/assert`
2. `cd assert`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
