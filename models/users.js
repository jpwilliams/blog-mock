var debug = require('debug')('readable')

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://127.0.0.1:27017/users'

module.exports = {}

MongoClient.connect(url, function (err, db) {
    module.exports.db = db.collection('users')

    module.exports.get_by_username = function (username, cb) {
        var canonical_username = username.toLowerCase()

        module.exports.db.findOne({
            username: canonical_username
        }, function (err, user) {
            return cb(err, user)
        })
    }

    module.exports.get_by_email = function (email, cb) {
        var canonical_email = email.toLowerCase()

        module.exports.db.findOne({
            email: canonical_email
        }, function (err, user) {
            return cb(err, user)
        })
    }

    module.exports.create = function (params, cb) {
        module.exports.db.insert(params, function (err, user) {
            if (err) return cb(err)

            return cb(null, user.insertedIds[0])
        })
    }
})