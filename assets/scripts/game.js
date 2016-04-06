'use strict';

const app = require('./app-data.js');
const gameApi = require('./gameApi.js');
const gameUi = require('./game-ui.js');

const gameSetUp = (board) => {
  console.log(board);
  app.turn = "x";
  app.numTurns = 0;
  console.log("Player 1's turn : " + app.turn);
  console.log(app);
};

const turn = (board, marker, square) => {

  const gameUi = require('./game-ui.js');

  console.log(marker + " plays on square " + square + ".");
  board[square] = marker;

  if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    app.game.over = true;
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
    app.game.over = true;
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
    app.game.over = true;
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
    app.game.over = true;
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
    app.game.over = true;
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
    app.game.over = true;
  } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
    app.game.over = true;
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
    app.game.over = true;
  } else if (app.numTurns === 8) {
    app.game.over = true;
  }

  if (app.game.over === true && app.numTurns < 8) {
    console.log ("Game over. Player " + marker + " wins.");
    app.winner = marker;
  } else if (app.game.over === true) {
    console.log ("Game over. Cat's game.");
    app.winner = 'cat';
  } else {
    console.log ("Next player's turn.");
  }

  let data = "{\"game\": {\"cell\": {\"index\":" + square + ",\"value\": \"" + marker + "\"},\"over\":" + app.game.over + "}}";
  gameApi.update(gameUi.updateGameSuccess, gameUi.failure, data);

  if (marker === "x") {
    app.turn = "o";
  } else {
    app.turn = "x";
  }

  app.numTurns += 1;

};

module.exports = {
  turn,
  gameSetUp
};
