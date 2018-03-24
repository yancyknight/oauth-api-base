const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({googleId: profile.id}).then(function(currentUser){
            if(currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                }).save().then(function(newUser) {
                    done(null, newUser);
                });
            }
        });
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        done(null, user);  
    });
});