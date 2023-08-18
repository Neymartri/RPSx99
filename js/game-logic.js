// All code should be written in this file.


// Players Move Type 
let playerOneMoveOneType,
playerOneMoveTwoType,
playerOneMoveThreeType,
playerTwoMoveOneType,
playerTwoMoveTwoType,
playerTwoMoveThreeType;

// Plyers' move value 
var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;
var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

// set playermove 
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, 
    moveTwoValue, moveThreeType, moveThreeValue) {
    // failfast incase any values not provided
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
        !moveThreeType || !moveThreeValue){
            return;
        }  
    // helper function validating if user has provided RPS as a string.
     if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) ||
     !isValidMoveType(moveThreeType)){
        return;
     }

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) ||
    !isValidMoveValue(moveThreeValue)){
        return;
    }

    if(moveOneValue + moveTwoValue + moveThreeValue > 99){
        return;
    }

     // player one move with valid input conditionals
     if(player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
};


// validating "rps" with parameter movetype from function isValidMoveType()
function isValidMoveType(moveType) {
    return ((moveType === 'rock') || (moveType === 'paper') || 
    (moveType === 'scissors'))
};

// validating isValidMoveValue() check that >=1 and <=99

function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}

// round winner 
// function getRoundWinner(roundNumber) {
//     switch(roundNumber){
//         case 1:
//             getMoveWinner()
//     }
// };

function getRoundWinner(roundNumber) {
    // switch statement that takes match 1,2,3
    switch(roundNumber) {
      case 1:
        return getMoveWinner(playerOneMoveOneType,
                             playerOneMoveOneValue,
                             playerTwoMoveOneType,
                             playerTwoMoveOneValue);
      case 2:
        return getMoveWinner(playerOneMoveTwoType,
                             playerOneMoveTwoValue,
                             playerTwoMoveTwoType,
                             playerTwoMoveTwoValue);
      case 3:
        return getMoveWinner(playerOneMoveThreeType,
                             playerOneMoveThreeValue,
                             playerTwoMoveThreeType,
                             playerTwoMoveThreeValue);
      default:
        return null;
    } 

    
  }

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    // return null if any move types or values are missing
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue === playerTwoMoveValue) {
            return 'Tie';
        } else if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    }else if (playerOneMoveType === 'rock') {
            if (playerTwoMoveType === 'scissors') {
              return 'Player One';
            } else {
              return 'Player Two';
            }
          } else if (playerOneMoveType === 'paper') {
            if (playerTwoMoveType === 'rock') {
              return 'Player One';
            } else {
              return 'Player Two';
            }
          } else {
            if (playerTwoMoveType === 'paper') {
              return 'Player One';
            } else {
              return 'Player Two';
            }
          }
};


// gane winner 
function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    };

    // define round wins with each player 
    let playerOneRoundWins = 0;
    let playerTwoRoundWins = 0;
    
    // loop through roundWinner to see the results of each rounds
    for(let roundNumber = 1; roundNumber <= 3; roundNumber++){
       const roundWinner = getRoundWinner(roundNumber);

        if (roundWinner === 'Player One'){
           playerOneRoundWins++; // add 1 score when player one wins 
        } else if (roundWinner === 'Player Two') { 
            playerTwoRoundWins++;
        }
    }
    
    if (playerOneRoundWins > playerTwoRoundWins) {
        return 'Player One';
    } else if (playerTwoRoundWins > playerOneRoundWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}; 


function setComputerMoves(){
  // create a set moves of rockpaper scissors and randomised it 
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  // only have 96 points given 99 points in total so subtract each value's move
  const moveOneValue = Math.floor(Math.random() * 96) + 1 ;
  const moveTwoValue = Math.floor(Math.random()* (97 - moveOneValue)) + 1;
  const moveThreeValue =  99 - (moveOneValue + moveTwoValue);
    // call setPlayerMoves function above with the computed value 
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, 
    moveTwoValue, moveThreeType, moveThreeValue) 
};