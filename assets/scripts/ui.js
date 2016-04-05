'use strict';

const app = require('./app-data.js');

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
  console.log(data.user);
  console.log(data.user.email + " logged in");
  $("#signInButton").hide();
  $("#registerButton").hide();
  $("#signOutButton").show();
  $("#welcome").show();
  $("#user-name").text(app.user.email);
};

const changePWSuccess = () => {
  console.log("password successfully changed");
  $("#change-pw-modal").hide();
  $(".modal-backdrop").hide(s);
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
