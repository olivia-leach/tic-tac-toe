'use strict';

const app = require('./app-data.js');
const gameApi = require('./gameApi');
const gameUi = require('./game-ui');

const signOutSuccess = (data) => {
  app.user = data;
  console.log("logged out");
  console.log(app);
  $("#signInButton").show();
  $("#registerButton").show();
  $("#signOutButton").hide();
  $("#welcome").hide();
};

const signInSuccess = (data) => {
  app.user = data.user;
  app.xWins = 0;
  app.oWins = 0;
  app.catWins = 0;
  console.log(app.user);
  console.log(data.user.email + " logged in");
  $("#signInButton").hide();
  $("#registerButton").hide();
  $("#signOutButton").show();
  $("#welcome").show();
  $("#user-name").text(app.user.email);
  gameApi.index(gameUi.indexGameSuccess, gameUi.failure);
};

const changePWSuccess = () => {
  console.log("password successfully changed");
  $("#change-pw-modal").hide();
  $(".modal-backdrop").hide();
  $("#success-pw-modal").modal('show');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  if(error.status === 401) {
    $("h1").text("Incorrect password.");
  }
  // $("h1").text("Account already exists");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePWSuccess
};
