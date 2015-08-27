var debug = require('debug')('readable')

var Users = require('../models/users.js')

module.exports = function (app, passwordless) {
    app.get('/login', function (req, res) {
        return res.render('login.html')
    })

    app.post('/login', passwordless.requestToken(function (email, delivery, cb) {
        debug('Requesting token')

        Users.get_by_email(email, function (err, user) {
            if (err) return cb(err)
            if (user) return cb(null, user._id.toString())

            Users.create({
                email: email
            }, function (err, user_id) {
                return cb(err, user_id)
            })
        })
    }), function (req, res) {
        debug('Returning POST login')

        return res.sendStatus(200)
    })

    app.get('/auth', passwordless.acceptToken(), function (req, res) {
        debug(req.user)

        return res.sendStatus(200)
    })

    app.get('/logout', passwordless.logout(), function (req, res) {
        debug('req.user ::', req.user)

        req.session.destroy(function (err) {
            return res.redirect('/')
        })
    })
}