'use strict';

const app = require('./app-data.js');
const tic = require('./game.js');

const newGameSuccess = (data) => {
  console.log("new game created");
  console.log(data);
  app.game = data.game;
  let board = app.game.cells;
  tic.gameSetUp(board);
};

const updateGameSuccess = (data) => {
  console.log(data);
  console.log("game successfully updated");
  // app.game = data.game;
  // console.log(app.game.cells);
};

const success = (data) => {
  console.log("game updated");
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  newGameSuccess,
  updateGameSuccess
};
