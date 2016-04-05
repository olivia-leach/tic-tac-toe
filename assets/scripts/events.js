'use strict';

const app = require('./app-data.js');

// const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
const gameApi = require('./gameApi');
const gameUi = require('./game-ui');
const tic = require('./game.js');

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
    // $("#opponent-modal").modal('show'); //uncomment to log in user on same machine
    gameApi.create(gameUi.newGameSuccess, gameUi.failure);
  });
  $('#game-history').on('click', function(event) {
    event.preventDefault();
    console.log("game history clicked");
    gameApi.index(gameUi.success, gameUi.failure);
  });
  $('#square0').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 0);
  });
  $('#square1').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 1);
  });
  $('#square2').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 2);
  });
  $('#square3').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 3);
  });
  $('#square4').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 4);
  });
  $('#square5').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 5);
  });
  $('#square6').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 6);
  });
  $('#square7').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 7);
  });
  $('#square8').on('click', function() {
    $(this).prepend('<img id="marker" class="marker" src="assets/images/' + app.turn + '.png" />');
    $(this).css( 'pointer-events', 'none' );
    tic.turn(app.game.cells, app.turn, 8);
  });
};

module.exports = {
  addHandlers,
};
