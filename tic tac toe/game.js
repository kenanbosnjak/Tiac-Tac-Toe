//Basic Things we need:
const gameBoard = document.getElementById('gameboard');
let infoDisplay = document.querySelector('#info');
let squares = ["", "", "", "", "", "", "", "", ""];

//We declare this so we can use it at the bottom
let go = "circle";

//Create the grid for the game
function createSquares () {
    squares.forEach((_cell, index) => {
        let square = document.createElement('div')
        square.classList.add('square');
        square.id = index;
        square.addEventListener('click', insertElement)
        gameBoard.append(square);
    });
};

createSquares();

//we use this to insert the x and o
function insertElement (e) {
const element = document.createElement('div');
go = go === "circle" ? "cross" : "circle"
element.classList.add(go);
e.target.append(element);
e.target.removeEventListener("click", insertElement);
checkScore()
}

//Complicated
function checkScore () {
    let allSquares = document.querySelectorAll('.square');
    let wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    wins.forEach(array => {
       let circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
    
       if(circleWins) {
        infoDisplay.textContent = 'Circle Wins!'
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        return 
    }

    
    })

    wins.forEach(array => {
        let crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))
     
        if(crossWins) {
         infoDisplay.textContent = 'Cross Wins!'
         allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
         return 
     }
 
     
     })



}