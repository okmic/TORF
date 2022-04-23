
module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

/*     app.route('/').post(indexControler.index) */
    app.route('/all').get(indexControler.all)
    app.route('/send').post(indexControler.send)
    app.route('/download').get(indexControler.download)
/*     app.route('/down').get() */
}