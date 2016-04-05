'use strict';

const app = require('./app-data.js');

// const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
const gameApi = require('./gameApi');
const gameUi = require('./game-ui');

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
  $('#change-pw').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log("change password clicked");
    authApi.changePW(authUi.changePWSuccess, authUi.failure, data);
  });
  $('#new-game').on('click', function() {
    console.log("new game!");
    $(this).fadeOut();
    $("#opponent-modal").modal('show');
    gameApi.create(gameUi.success, gameUi.failure);
  });
  $('#game-history').on('click', function(event) {
    event.preventDefault();
    console.log("game history clicked");
    gameApi.index(gameUi.success, gameUi.failure);
  });
  $('#square0').on('click', function() {
    console.log("square0 clicked");
  });
  $('#square1').on('click', function() {
    console.log("square1 clicked");
  });
  $('#square2').on('click', function() {
    console.log("square2 clicked");
  });
  $('#square3').on('click', function() {
    console.log("square3 clicked");
  });
  $('#square4').on('click', function() {
    console.log("square4 clicked");
  });
  $('#square5').on('click', function() {
    console.log("square5 clicked");
  });
  $('#square6').on('click', function() {
    console.log("square6 clicked");
  });
  $('#square7').on('click', function() {
    console.log("square7 clicked");
  });
  $('#square8').on('click', function() {
    console.log("square8 clicked");
  });
};

module.exports = {
  addHandlers,
};
