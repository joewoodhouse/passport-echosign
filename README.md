# Passport-EchoSign

[Passport](http://passportjs.org/) strategy for authenticating with [EchoSign](https://www.echosign.adobe.com)
using the OAuth 2.0 API.

This module lets you authenticate using EchoSign in your Node.js applications.
By plugging into Passport, EchoSign authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Usage

#### Configure Strategy

The EchoSign authentication strategy authenticates users using a EchoSign
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

    passport.use(new EchoSignStrategy({
        clientID: ECHOSIGN_APP_ID,
        clientSecret: ECHOSIGN_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/echosign/callback"
      }, function (accessToken, refreshToken, profile, done) {
	// store credentials, etc
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'echosign'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/echosign', passport.authenticate('echosign'));

    app.get('/auth/echosign/callback',
      passport.authenticate('echosign', { failureRedirect: '/login' }),
      function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/');
      });

## Credits

Created by [Joe Woodhouse](http://github.com/joewoodhouse)

Code based on passport-mailchimp by [Brian Falk](http://github.com/brainflake)

## License

[The MIT License](http://opensource.org/licenses/MIT)
