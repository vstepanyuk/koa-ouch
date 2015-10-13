# koa-ouch
koa ouch error handler

# Install
```bash
npm i koa-ouch
```

# Usage

```js
var koa = require('koa');
var app = koa();

var errorHandler = require('koa-ouch');

errorHandler(app);
```

# Options
```js
errorHandler(app, options)
```

- ***theme***: 'orange' or 'blue', _default: 'orange'_
