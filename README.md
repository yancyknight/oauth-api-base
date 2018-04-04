# Oauth API Base

This project is meant to be a starting place for building a REST API. It uses an Express server with OAuth authentication through passport and persistence through MongoDB using Mongoose. 

Only the google login strategy is currently implemented, although adding new strategies should be fairly easy. You will need to register your own application through the Google developer console and enable the Google+ API.

This starter project uses the config/keys.js file to hold sensitive API key information. If you store actual keys in this file it should never be committed to source control. In reality, you will likely store your keys in environment variables and then pull those environment variables into keys.js.

Your keys.js file should look like this:
```
module.exports = {
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID || 'yourClientId',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'yourClientSecret'
    },
    mongo: {
        dbURI: process.env.MONGO_DB_URI || 'yourMongoConnectionString'
    },
    session: {
        cookieKey: process.env.SESSION_COOKIE_SECRET || 'yourCookieSessionSecret (you make it up)'
    }
}
```
