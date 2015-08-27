var debug = require('debug')('readable')

module.exports = function (app) {
    app.get('/', function (req, res) {
        debug('Hit usual home')

        return res.render('blog.html')
    })
}