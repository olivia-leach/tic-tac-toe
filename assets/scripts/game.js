'use strict';

const app = require('./app-data.js');
const gameApi = require('./gameApi.js');

const gameSetUp = (board) => {
  $('.square > img').remove();
  $("#gameOver").fadeOut();
  $("#xWins").fadeOut();
  $("#oWins").fadeOut();
  $("#catWins").fadeOut();
  console.log(board);
  app.turn = "x";
  app.winner = "";
  app.numTurns = 0;
  console.log("Player 1's turn : " + app.turn);
  $("#player1turn").show();
  console.log(app);
};

const turn = (board, marker, square) => {

  const gameUi = require('./game-ui.js');

  // let rand = Math.floor(Math.random() * (80 - 20 + 1) + 20);
  // $("#player2turn").attr("margin-top",rand);

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

  if (app.game.over === true) {
    $(".square").css( 'pointer-events', 'none' );
    $("#gameOver").slideUp( 300 ).delay( 100 ).fadeIn( 400 );
    $("#new-game").text("Play again!").slideUp( 300 ).delay( 3000 ).fadeIn( 400 );
  }

  if (app.winner === "x") {
    $("#xWins").slideUp( 300 ).delay( 1500 ).fadeIn( 400 );
    $("#player2turn").hide();
  } else if (app.winner === "o") {
    $("#oWins").slideUp( 300 ).delay( 1500 ).fadeIn( 400 );
    $("#player1turn").hide();
  } else if (app.winner === "cat") {
    $("#catWins").slideUp( 300 ).delay( 1500 ).fadeIn( 400 );
    $("#player2turn").hide();
  }

  let data = "{\"game\": {\"cell\": {\"index\":" + square + ",\"value\": \"" + marker + "\"},\"over\":" + app.game.over + "}}";
  gameApi.update(gameUi.updateGameSuccess, gameUi.failure, data);

  if (app.game.over === true) {
    $("#player2turn").hide();
    $("#player1turn").hide();
  } else if (marker === "x") {
    app.turn = "o";
    $("#player2turn").show();
    $("#player1turn").hide();
  } else {
    app.turn = "x";
    $("#player2turn").hide();
    $("#player1turn").show();
  }

  app.numTurns += 1;

};

module.exports = {
  turn,
  gameSetUp
};
