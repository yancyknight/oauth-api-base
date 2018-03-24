# Oauth API Base

This project is meant to be a starting place for building a REST API. It uses an Express server with OAuth authentication through passport and persistence through MongoDB using Mongoose. 

Only the google login strategy is currently implemented, although adding new strategies should be fairly easy. You will need to register your own application through the Google developer console and enable the Google+ API.

For simplicity, this starter project uses the config/keys.js file to hold sensitive API key information. This file should never be committed to source control. In reality, you will likely store this information in environment variables.

Your keys.js file should have this structure:
```
module.exports = {
    google: {
        clientID: 'yourClientId',
        clientSecret: 'yourClientSecret'
    },
    mongo: {
        dbURI: 'yourMongoConnectionString'
    },
    session: {
        cookieKey: 'yourCookieSessionSecret (you make it up)'
    }
}
```