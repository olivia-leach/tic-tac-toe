'use strict';

const app = require('./app-data.js');

const signUp = (success, failure, data) => {
  console.log("Sign up request queued");
  $.ajax({
    method : 'POST',
    url : app.api + '/sign-up',
    data
  }).done(success).fail(failure);
};

const signIn = (success, failure, data) => {
  console.log("Sign in request queued");
  $.ajax({
    method : 'POST',
    url : app.api + '/sign-in',
    data
  }).done(success).fail(failure);
};

const signOut = (success, failure) => {
  // if (!app.user) bad;
  console.log("Sign out request queued");
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut
};