var express = require('express')
var subdomain = require('express-subdomain')
var debug = require('debug')('readable')

module.exports = function (app, passwordless) {
    var check_user_exists = subdomain('*', function (req, res, next) {
        var username = req.subdomains[0]

        debug('Checking "' + username + '" exists')

        
    })
    var router = express.Router()

    router.use(check_user_exists)

    router.get('/', function (req, res) {
        return res.send(200)
    })

    app.use(subdomain('*', router))
}