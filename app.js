// Grab our base packages
var express = require('express')
var app = express()
var body_parser = require('body-parser')
var debug = require('debug')('readable')
var pkg = require('./package.json')

// Set up exporting of the app
module.exports = app

// Set up our parser
app.use(body_parser.urlencoded());
app.use(body_parser.json());

// Set up static assets
app.use(express.static('views'))

// Allow use of EJS HTML views
app.set('view engine', 'ejs')
app.engine('.html', require('ejs').renderFile)

// Set up sessions
var session = require('express-session')
var RedisStore = require('connect-redis')(session)

app.use(session({
    // store: new RedisStore(),
    secret: 'ob8s46ts84tibs874taow784btao4t'
}))

// Set up passwordless authentication
var passwordless = require('passwordless')
var passwordless_store = require('passwordless-mongostore')

var passwordless_mongo_url = 'mongodb://127.0.0.1:27017/passwordless'
passwordless.init(new passwordless_store(passwordless_mongo_url))

app.use(passwordless.sessionSupport())

// Set up our emailer
var emailjs = require('emailjs')

var emailer = emailjs.server.connect({
    user: 'no-reply@readable.io',
    password: 'lq7RaPE+[z~c',
    host: 'hp24.hostpapa.com',
    ssl: true
})

passwordless.addDelivery(function (token_to_send, uid_to_send, recipient, cb) {
    var host = 'readable.io:3005/auth'

    emailer.send({
        text: 'Hello!\nAccess here: http://' + host + '?token=' + token_to_send + '&uid=' + encodeURIComponent(uid_to_send),
        from: 'no-reply@readable.io',
        to: recipient,
        subject: 'Readable.io Login'
    }, function (err, message) {
        if (err) debug(err)

        return cb(err)
    })
})

// Set up subdomain usage
app.use(require('express-subdomain-handler')({
    baseUrl: 'readable.io',
    prefix: '__subdomain__',
    logger: true
}))

// Import our services
require('./services/login')(app, passwordless)
require('./services/app')(app, passwordless)
require('./services/sales')(app)

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

if (require.main === module) {
    app.set('port', process.env.PORT || 3005)

    var server = app.listen(app.get('port'), function () {
        debug('Server started on %s:%s', server.address().address, server.address().port)

        app.set('server', server)
    })
}
