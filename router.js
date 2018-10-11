var express = require('express')
var router = express.Router()
var User = require('./models/user')

router.get('/', function (req, res) {
    res.render('index.html')
})

router.get('/login', function (req, res) {
    res.render('login.html')
})

router.post('/login', function (req, res) {

})

router.get('/register', function (req, res) {
    res.render('register.html')
})

router.post('/register', function (req, res) {
    var body = req.body
    User.addUser(body.nickname, body.password, body.email).then(function () {
        return User.findByName(body.nickname)
    }).then(function (user) {
        console.log(user.nickname)
    })
})

module.exports = router