var express = require('express');
var router = express.Router();
const requireLogin = require('../auth/requireLogin');

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/profile', requireLogin, function(req, res) {
    res.render('profile', {user: req.user});
});

module.exports = router;
