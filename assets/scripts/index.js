'use strict';

const authEvents = require('./events.js');
const app = require('./app-data.js');


// On document ready
$(() => {
  authEvents.addHandlers();
  $("#signOutButton").hide();
  $("#welcome").hide();
});
