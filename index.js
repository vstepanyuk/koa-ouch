'use strict'

const Ouch = require('ouch')

module.exports = function (app, options) {
  const opts = Object.assign({
    theme: 'orange',
    title: null
  }, options || {})

  app.context.onerror = function (err) {
    // If there is no error then skip
    if (!err) return;

    const ouch = new Ouch()
    ouch.pushHandler(new Ouch.handlers.PrettyPageHandler(opts.theme, opts.title))
    ouch.handleException(err, this.req, this.res)
  }
}
