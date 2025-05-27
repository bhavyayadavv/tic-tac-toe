console.log("JavaScript is connected");
document.addEventListener('DOMContentLoaded', () => {
const cells = document.querySelectorAll('.cell');
let currentPlayer='X';
let board = ["", "", "", "", "", "", "", "", ""]; 
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  
  function checkWin(player) {
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    );
  }


cells.forEach((cell,index) => {
cell.dataset.index = index; 
cell.addEventListener('click', () => {
    console.log("Cell Clicked");

    if (cell.textContent !== '') return;
    cell.textContent = currentPlayer;
    if (currentPlayer === 'X') {
  cell.classList.add('x');
} else {
  cell.classList.add('o');
}
    cell.classList.add('clicked'); 
    board[index] = currentPlayer;

    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        cells.forEach(c => c.style.pointerEvents = "none");
        return;
      }

      if (!board.includes("")) {
        alert("It's a draw!");
        return;
      }

    currentPlayer=currentPlayer=='X'? 'O' : 'X';
});
});
});
