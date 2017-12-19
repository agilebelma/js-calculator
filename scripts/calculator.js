'use strict';

document.addEventListener("DOMContentLoaded", startApp);

function startApp() {

    let allButtons = document.getElementsByClassName("calButton");

    for (let i = 0; i < allButtons.length; i += 1) {
        let button = allButtons[i];
        button.addEventListener("click", buttonClicked);
    }

}

var numStr = "";
var arrInput = [];


function buttonClicked(evt) {
    let value = evt.target.value;

    switch (value) {
        case "AC":
            buttonAllClearPressed();
            break;
        case "CE":
            buttonClearEntryPressed();
            break;
        case "%":
            buttonPercentPressed();
            break;
        case ".":
            buttonDotPressed();
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            buttonNumPressed(value);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            buttonOprPressed(value);
            break;
        default:
            console.log("Something wrong!! value = ", value);

    }
}

function display(value) {

    let displayPanel = document.getElementById("displayPanel");

    displayPanel.innerHTML = value;
}


function buttonAllClearPressed() {
    buttonClearEntryPressed();
    arrInput = [];
}

function buttonClearEntryPressed() {
    numStr = "";
    display("0");
}

function buttonPercentPressed() {
    console.log("Percent Pressed");
}

function buttonDotPressed() {
    console.log("dot pressed");
}

function buttonNumPressed(num) {
    console.log("num pressed: ", num);

    if (numStr.length < 17) {
        numStr += num;
    }

    display(numStr);
}

function buttonOprPressed(opr) {
    console.log("operator pressed", opr);
    console.log("numStr :", numStr);

    if (numStr.length <= 0) {
        let displayPanel = document.getElementById("displayPanel");
        numStr = displayPanel.innerText;
    }

    arrInput.push(numStr);
    arrInput.push(opr);

    let statementStr = arrInput.join(" ");
    numStr = "";
    console.log("statement: ", statementStr);

    calculate();

}


function calculate() {

    console.log("1: ", arrInput);
    let arrLength = arrInput.length;

    let statementStr = arrInput.slice(0, arrLength-1).join(" "); 
    console.log(statementStr);
    console.log("2: ", arrInput);

    let result = eval(statementStr);
    display(result);
    console.log("result: ", result);

    if (arrInput[arrLength-1] == "=") {
        console.log("3: ", arrInput);
        arrInput = [];
    }

    console.log("finished calculate: ", arrInput);

}

