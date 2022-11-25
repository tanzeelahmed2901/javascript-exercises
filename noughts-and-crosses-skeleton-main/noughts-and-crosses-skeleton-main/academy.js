// Make your changes to store and update game state in this file

let gameGrid = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

let nought = 'nought'
let cross = 'cross'
let turn = 0
let gameOver = false
let illegalMove = false
let player1Name
let player2Name

function currentPlayer() {
    return turn % 2 === 0 ? nought : cross;
}

const submitNamesButton = document.getElementById("submit-names-button")
submitNamesButton.addEventListener("click", submitNames)

function submitNames(event){
    player1Name = document.getElementById("player1Name").value 
    player2Name = document.getElementById("player2Name").value

    document.getElementById("player1Name").disabled = true;
    document.getElementById("player2Name").disabled = true;
    document.getElementById("submit-names-button").disabled = true;

    console.log(player1Name)
    console.log(player2Name)
}

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    
    if(turn === 0){
        submitNames()
    }
    console.log("takeTurn was called with row: "+row+", column:"+column);

    if(gameOver === true){
        turn = 0
        alert("Game over! Please reset to play again :)")
        return false
    }
    
    if(gameGrid[row][column]==null){
        illegalMove = false
        if(currentPlayer() === nought ){
            gameGrid[row][column] = nought
        }else if(currentPlayer() === cross){
            gameGrid[row][column] = cross
        }
    }else{
        illegalMove = true
        alert("Illegal move. Try again.")
    }
    
}

function GetWinner(){
    if(currentPlayer() === nought && player1Name != null && player1Name != ""){
        return player1Name
    }
    else if(currentPlayer() === cross && player2Name != null && player2Name != ""){
        return player2Name
    }else{
        return currentPlayer() === nought ? "noughts" : "crosses"
    }
    
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    
    // for loop to check columns and rows 
    console.log('turn: '+currentPlayer())
    for (let i = 0; i< 3; i++){

        if(gameGrid[i][0] === gameGrid[i][1] && gameGrid[i][0] === gameGrid[i][2] && gameGrid[i][0] != null){
            gameOver = true
            return GetWinner()
        }

        if(gameGrid[0][i] === gameGrid[1][i] && gameGrid[0][i] === gameGrid[2][i] && gameGrid[0][i] != null){
            gameOver = true
            return GetWinner()
        }
    }

    //check diaganols 
    if(gameGrid[0][0] === gameGrid[1][1] && gameGrid[0][0] === gameGrid[2][2] && gameGrid[0][0] != null) {
        gameOver = true
        return GetWinner()
    }

    if(gameGrid[0][2] === gameGrid[1][1] && gameGrid[0][2] === gameGrid[2][0] && gameGrid[0][2] != null) {
        gameOver = true
        return GetWinner()
    }

    //tie game
    if (turn === 8){
        gameOver = true
        return "nobody"
    }

    if(!illegalMove){ //only increase turn count if legal move
        turn++
    }
    
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    location.reload()
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return gameGrid
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
        submitNames,
    }
} else {
    console.log("Running in Browser")
}
