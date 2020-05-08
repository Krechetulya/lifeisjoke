"use strict";

let btn = document.querySelector("button"),
    figure = document.querySelector(".box");

let posX = 0,
    posY = 0,
    checkVal = true;

function myAnimation() {
    let id = setInterval(frame, 1);

    function frame() {
        if(checkVal) {
            if (posX < 500 && posY == 0) {
                posX++;
                figure.style.left = posX + 'px';
            } else if (posX == 500 && posY < 500) {
                posY++;
                figure.style.top = posY + 'px';
            } else if (posX > 0 && posY == 500) {
                posX--;
                figure.style.left = posX + 'px';
            } else if (posX == 0 && posY > 0) {
                posY--;
                figure.style.top = posY + 'px';
            }
        }
    }
}

myAnimation();

btn.addEventListener("click", function() {
    if (checkVal) {
        checkVal = false;
        btn.style.backgroundColor = "green";
        btn.textContent = "Play";
    } else {
        checkVal = true;
        btn.style.backgroundColor = "red";
        btn.textContent = "Pause";
    }
});