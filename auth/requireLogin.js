module.exports = function requireLogin(req, res, next) {
    if(req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}