var express = require('express')
var debug = require('debug')('readable')
var Users = require('../models/users.js')

module.exports = function (app, passwordless) {
    var check_user_exists = function (req, res, next) {
        debug(req.user)

        var username = req.params.subdomain

        debug('Checking "' + username + '" exists...')

        Users.get_by_username(username, function (err, user) {
            if (err) return res.status(500).send(err)

            if (!user) {
                debug('    "' + username + '" does not exist')

                return res.status(404).send('No user found')
            }

            debug('    "' + username + '" exists')

            return next()
        })
    }

    app.get('/__subdomain__/:subdomain/', check_user_exists, function (req, res) {
        return res.render('edit.html')
    })

    app.get('/__subdomain__/:subdomain/me', check_user_exists, passwordless.restricted(), function (req, res) {
        return res.status(200).send('Welcome, ' + req.user.username + '!')
    })
}