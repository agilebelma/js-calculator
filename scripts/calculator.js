'use strict';

document.addEventListener("DOMContentLoaded", startApp);

function startApp() {

    let allButtons = document.getElementsByClassName("calButton");

    for (let i=0; i<allButtons.length; i+=1) {
        let button = allButtons[i];
        button.addEventListener("click", buttonClicked);
    }


}

function buttonClicked(evt) {
    console.log(evt.target.value);
}