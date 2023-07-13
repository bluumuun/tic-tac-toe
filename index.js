// javascript by cassie
// / Array to keep track of the game state
let board = ['', '', '', '', '', '', '', '', ''];
// Array to store the winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// Variable to keep track of the current player ('X' or 'O')
let currentPlayer = 'X';
// Function to make a move
function makeMove(index) {
  // Check if the cell is already occupied or if the game is over
  if (board[index] === '' && !isGameOver()) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (isGameOver()) {
      alert(currentPlayer + ' wins!');
    } else if (!board.includes('')) {
      alert("It's a tie!");
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
// Function to check if the game is over
function isGameOver() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}
// // Function to reset the board
// function resetBoard() {
//   board = ['', '', '', '', '', '', '', '', ''];
//   currentPlayer = 'X';
//   const cells =