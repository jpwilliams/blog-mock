module.exports = function (app, passwordless) {
    app.get('/login', function (req, res) {
        return res.render('login')
    })

    app.post('/login', function (req, res) {
        return res.send(200)
    })

    app.get('/auth', passwordless.acceptToken(), function (req, res) {
        return res.send(200)
    })
}