const passport = require('passport');

const route = require ('express').Router();

route.get('/google', passport.authenticate('google', { scope: ['profile'] }));
route.get('/google/callback', passport.authenticate('google'),(req,res) => {
    res.redirect('/planets');
});

module.exports = route;