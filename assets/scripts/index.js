'use strict';

const authEvents = require('./events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  $("#signOutButton").hide();
  $("#welcome").hide();
  document.body.style.overflow = 'hidden';
});
