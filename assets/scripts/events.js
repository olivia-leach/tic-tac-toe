'use strict';

const app = require('./app-data.js');

// const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
    $("#sign-up-modal").hide();
    $(".modal-backdrop").hide();
  });
  $('#sign-in').on('submit', function(event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    $("#log-in-modal").hide();
    $(".modal-backdrop").hide();
  });
  $('#sign-out').on('submit', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    $("#sign-out-modal").hide();
    $(".modal-backdrop").hide();
  });
};

module.exports = {
  addHandlers,
};
