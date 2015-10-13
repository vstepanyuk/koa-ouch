'use strict'

const Ouch = require('ouch')

module.exports = (app, options) => {
  const opts = Object.assign({theme: 'orange'}, options || {})

  app.context.onerror = (err) => {
    // If there is no error then skip
    if (!err) return;

    const ouch = new Ouch()
    ouch.pushHandler(new Ouch.handlers.PrettyPageHandler(opts.theme))
    ouch.handleException(err, this.req, this.res)
  }
}
