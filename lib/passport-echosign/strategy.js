'use strict';

var OAuth2Strategy = require('passport-oauth2'),
    InternalOAuthError = require('passport-oauth2').InternalOAuthError,
    util = require('util');

function Strategy(options,verify){
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://secure.echosign.com/public/oauth';
  options.tokenURL = options.tokenURL || 'https://secure.echosign.com/oauth/token';

  OAuth2Strategy.call(this,options,verify);
  this.name = 'echosign';
  this._refreshURL = options.refreshURL || 'https://secure.echosign.com/oauth/refresh';
  this._oauth2._useAuthorizationHeaderForGET = true;
  this._oauth2._skipUserProfile = true;
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;
