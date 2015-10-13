# koa-ouch
koa ouch error handler

# Install
`npm i koa-ouch`

# Usage

```
var koa = require('koa');
var app = koa();

var errorHandler = require('koa-ouch');

errorHandler(app);
```

# Options
`errorHandler(app, options)`

- ***theme***: 'orange' or 'blue', _default: 'orange'_
