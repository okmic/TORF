'use strict'

module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

    app.route('/').post(indexControler.index)
    app.route('/test').get(indexControler.test)
}