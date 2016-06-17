var move = 0;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var winMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var name1 = "X";
var name2 = "O";

function win() {                                                         "use strict";
    var i;
    for (i = 0; i <= 7; i += 1) {if ((board[winMoves[i][0]] !== 0) && (board[winMoves[i][0]] === board[winMoves[i][1]]) && (board[winMoves[i][0]] === board[winMoves[i][2]])) {
        return board[winMoves[i][1]];
    }
        }
    return 0;
               }

function check() {
    "use strict";
    switch (win()) {
    case 0:
        if (move === 9) {
        document.getElementById("winner").innerHTML = "Draw!...Boring.";
        document.getElementById("win").style.outline = "none";
        document.getElementById("win").style.display = "inline";
        }
        break;
    
    case -1:
        //window.alert(name1 + " Wins!");
        document.getElementById("winner").innerHTML = name1 + " Wins!";
        document.getElementById("win").style.outline = "none";
        document.getElementById("win").style.display = "inline";
        break;
        
    case 1: 
        //window.alert(name2 + " Wins!");
        document.getElementById("winner").innerHTML = name2 + " Wins!";
        document.getElementById("win").style.outline = "none";
        document.getElementById("win").style.display = "inline";
        break;
    
    }
    
}


function clicked(element) {
    "use strict";
    
    move += 1;
    
    element.style.boxShadow = "inset 3px 3px 3px rgba(0,0,0,0.75)";
    element.style.backgroundColor = "azure";
    element.style.textShadow = "4px 4px 8px #474747";
    element.style.color = "#00CCFF";
    
    var s = Number(element.id.replace("a", ""));
    
    if ((move % 2) !== 0) {
        board[s - 1] = -1;
        element.innerHTML = "X";
        element.disabled = true;
    } else {
        board[s - 1] = 1;
        element.innerHTML = "O";
        element.disabled = true;
    }
    check();
    
}


function hoverin(element) {
    "use strict";
    element.style.backgroundColor = "white";
    element.style.boxShadow = "2px 2px 20px 1px rgba(0,0,0,0.75)";
    element.style.color = "#00BFFF";
}

function hoverout(element) {
    "use strict";
    element.style.backgroundColor = "#00BFFF";
    element.style.boxShadow = "1px 1px 5px 1px rgba(0,0,0,0.75)";
    element.style.color = "white";
}


function popup() {
    "use strict";
    document.getElementById("popup").style.outline = "none";
    document.getElementById("popup").style.display = "inline";
    
}
function Close() {
    "use strict";
    document.getElementById("popup").style.display = "none";
    document.getElementById("win").style.display = "none";
}
function Submit() {
    "use strict";
    name1 = document.getElementById("player1").value;
    name2 = document.getElementById("player2").value;
    if ((name1 === "" ) || (name1 === undefined) || (name2 === "") || (name2 === undefined)) {
        location.reload();
        
    }
    document.getElementById("popup").style.display = "none";
}
function again() {
    "use strict";
    /*board = [0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    move = 0;
    var t, s = "a";
    window.console.log("here");
    for (t = 1; t <= 9; t += 1) {
        s += "i";
        document.getElementById(s).innerHTML = "";
        document.getElementById(s).disabled = false;
        window.console.log("here");
    }*/
    
    location.reload();
}


