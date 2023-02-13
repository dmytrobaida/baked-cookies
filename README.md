# Baked Cookies
[![npm version](https://badge.fury.io/js/baked-cookies.svg)](https://badge.fury.io/js/baked-cookies)

Pure JS library to parse and serialize cookie strings for further manipulation

## Install

Using npm:

```bash
npm install --save baked-cookies
```

Using yarn:

```bash
$ yarn add baked-cookies
```

## Usage

In this example we are parsing cookie string. As result we are getting object of key-value pairs with cookies data.

``` javascript
import { parse } from 'baked-cookies';

const parseResult = parse('cookieKey=cookieValue;');
// parseResult = {cookieKey: 'cookieValue'}
```

Here we are serializing object of key-value pair into cookie string.

``` javascript
import { serialize } from 'baked-cookies';

const serializeResult = serialize({cookieKey: 'cookieValue'});
// serializeResult = 'cookieKey=cookieValue;'
```

## License

Baked Cookies is released under the [MIT](LICENSE.md) license.