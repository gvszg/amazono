const secret = require('../config');

exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
            return next();
        }
    req.session.returnTo = req.originalUrl;
    res.redirect('/');
}

exports.isAdmin = function (req, res, next) {
    if (req.isAuthenticated() &&
            req.user &&
            req.user.email &&
            secret.admins.indexOf(req.user.email + ";") != -1) {
            return next();
        }

    req.session.returnTo = req.originalUrl;
    res.redirect('/');
}

exports.isTechLibUser = function(req, res, next) {
    if (req.isAuthenticated() && req.user.lib === 'tech') {
            return next();
        }
    req.session.returnTo = req.originalUrl;
    res.redirect('/');
}

exports.isPrivilegedUser = function(req, res, next) {
    console.log(req);
    if (req.isAuthenticated() && req.user.lib === 'privileged') {
                return next();
            }
    req.session.returnTo = req.originalUrl;
    res.redirect('/');
}
