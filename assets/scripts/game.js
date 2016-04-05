'use strict';

let board = ["","","","","","","",""];

let gameContinue = true;

const turn = (marker, square) => {
  console.log(marker + " plays on square " + square + ".");
  board[square] = marker;

  if (board[0] === (board[1] && board[2])) {
    gameContinue = false;
  } else if (board[3] === (board[4] && board[5])) {
    gameContinue = false;
  } else if (board[6] === (board[7] && board[8])) {
    gameContinue = false;
  } else if (board[0] === (board[3] && board[6])) {
    gameContinue = false;
  } else if (board[1] === (board[4] && board[7])) {
    gameContinue = false;
  } else if (board[2] === (board[5] && board[8])) {
    gameContinue = false;
  } else if (board[0] === (board[4] && board[8])) {
    gameContinue = false;
  } else if (board[2] === (board[4] && board[6])) {
    gameContinue = false;
  } else {
    gameContinue = true;
  }

  if (gameContinue === false) {
    console.log ("Game over. Player " + marker + " wins.");
  } else {
    console.log ("Next player's turn.");
  }

  return board;

};

module.exports = [
  turn
];
