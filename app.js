const express = require('express');
const mainRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const passportSetup = require('./auth/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

// set up ejs
app.set('view engine', 'ejs');

// set up cookies for authentication
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000 * 3, // 3 days
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongo.dbURI, function() {
    console.log(`connected to mongoDB`);
});

app.use('/', mainRoutes);

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log(`app listening on port 3000`);
});