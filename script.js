const rows = 3;
const columns = 3;
const board = [];

var winners = new Array();

function loadAnswers()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

// Create a 2d array that will represent the state of the game board
// For this 2d array, row 0 will represent the top row and
// column 0 will represent the left-most column.
// This nested-loop technique is a simple and common way to create a 2d array.
for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
    board[i].push(value = 0);
    }
}
function generateBoardDOM(array) {
    const boardContainer = document.querySelector("#board-container");
    boardContainer.innerHTML = '';
    const rowzero = document.createElement('div')
    rowzero.classList.add("cell");
    rowzero.classList.add("0");
    const rowone = document.createElement('div')
    rowone.classList.add("cell");
    rowone.classList.add("1");
    const rowtwo = document.createElement('div')
    rowtwo.classList.add("cell");
    rowtwo.classList.add("2");
    array.forEach((row, rowIndex) => {
        row.forEach((cellContent, columnIndex) =>{
            if (rowIndex === 0) {
                const cell = document.createElement('div');
                cell.textContent = cellContent;
                cell.classList.add("column");
                cell.setAttribute('id', columnIndex + 1);
                rowzero.appendChild(cell);
                boardContainer.appendChild(rowzero);
                console.log(cellContent);
            }
            else if (rowIndex === 1) {
                const cell = document.createElement('div');
                cell.textContent = cellContent;
                cell.classList.add("column");
                cell.setAttribute('id', columnIndex + 4);
                rowone.appendChild(cell);
                boardContainer.appendChild(rowone);
                console.log(cellContent);
            }
            else if (rowIndex === 2) {
                const cell = document.createElement('div');
                cell.textContent = cellContent;
                cell.classList.add("column");
                cell.setAttribute('id', columnIndex + 7);
                rowtwo.appendChild(cell);
                boardContainer.appendChild(rowtwo);
                console.log(cellContent);
            }
            const grid = document.querySelectorAll(".column");
            grid.forEach((element) => {
                // console.log(element)
                element.addEventListener("click", () => {
                    play(element.getAttribute('id'));
                })
            })
        });
    });

}
function dropToken(column, row, player) {
    const displayBoard = () => {
        // console.log(board[0]);
        // console.log(board[1]);
        // console.log(board[2]);
    }
    console.log("board: " + board[column][row])
    if (!(board[column][row] === 0)) {
        console.log("errdfasdfdfor")
        return;
    }
    value = player.token;


    board[column][row] = value;
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        console.log(activePlayer);
    }
    generateBoardDOM(board);
    //displayBoard();
    
    if (checkWin(activePlayer) === "Player1 WIN" | "Player2 WIN") {
        return console.log("WIN"), generateBoardDOM(board);
    }
    switchPlayerTurn();
    return board, generateBoardDOM(board), play()  
}




    const playerOneName = "Player1";
    const playerTwoName = "Player2";

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0];

function checkWin(player) {
    console.log("CheckWin")
    console.log(player.name)
    console.log(player.token)
    if ((board[0][0] === player.token && board[0][1] === player.token && board[0][2] === player.token) ) {
        return(player.name + " WIN")
    }
    else if ((board[1][0] === player.token && board[1][1] === player.token && board[1][2] === player.token )){
        return(player.name + "WON!!")
    }
    else if ((board[2][0] === player.token && board[2][1] === player.token && board[2][2] === player.token )){
        return(player.name + "WON!!")
    }
    else if ((board[0][1] === player.token && board[1][1] === player.token && board[2][1] === player.token )){
        return(player.name + "WON!!")
    }
    else if ((board[0][2] === player.token && board[1][2] === player.token && board[2][2] === player.token )){
        return(player.name + "WON!!")
    }
    else if ((board[0][0] === player.token && board[1][1] === player.token && board[2][2] === player.token )){
        return(player.name + "WON!!")
    }
    else if ((board[2][0] === player.token && board[1][1] === player.token && board[0][2] === player.token )){
        return(player.name + "WON!!")
    }
    else return
    }


function play(field) {
    if (field >= 0 && field <= 3) {
        console.log(field)
        dropToken(0, field - 1, activePlayer);
    }
    else if (field >= 4 && field <= 6) {
        console.log(field)
        dropToken(1, field - 4, activePlayer);
    }
    else if (field >= 7 && field <= 9) {
        console.log(field)
        dropToken(2, field - 7, activePlayer);
    }
}

generateBoardDOM(board)



//cell


// Accept a player's token to change the value of the cell

// How we will retrieve the current value of this cell through closure
