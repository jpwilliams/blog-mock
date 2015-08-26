// Grab our base packages
var express = require('express')
var app = express()
var body_parser = require('body-parser')
var debug = require('debug')('readable')
var pkg = require('./package.json')

// Set up exporting of the app
module.exports = app

// Set up static assets
app.use(express.static('views'))

// Allow use of EJS HTML views
app.set('view engine', 'ejs')
app.engine('.html', require('ejs').renderFile)

// Set up sessions
var session = require('express-session')

app.use(session({
    secret: 'alriugaier8pug94ut0awsa;o4tua;4pota;4'
}))

// Set up passwordless authentication
var passwordless = require('passwordless')
var passwordless_store = require('passwordless-mongostore')

var passwordless_mongo_url = 'mongodb://127.0.0.1:27017/passwordless'
passwordless.init(new passwordless_store(passwordless_mongo_url))

app.use(passwordless.sessionSupport())

// Import our services
require('./services/login')(app, passwordless)
require('./services/sales')(app)
require('./services/app')(app, passwordless)

if (require.main === module) {
    app.set('port', process.env.PORT || 3000)

    var server = app.listen(app.get('port'), function () {
        debug('Server started on %s:%s', server.address().address, server.address().port)

        app.set('server', server)
    })
}
