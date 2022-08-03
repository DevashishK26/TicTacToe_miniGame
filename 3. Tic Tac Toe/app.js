console.log('Welcome to Tic-Tac-Toe');

let turn = "X";
let gameOver = false;


//Function for changing turn
const changeTurn = () => {
    if (turn === "X") {
        return "0";
    }
    else {
        return "X";
    }
}

//Function for win 
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            gameOver = true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "178px"
        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', (e) => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

//Reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";

    gameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
})