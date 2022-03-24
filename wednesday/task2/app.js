"use strict";

function d1() {
    let color = this.style.backgroundColor;
    let d2;
    
    switch (color) {
        case "red":
            d2 = "green";
            break;
        case "green":
            
            d2 = "blue";
            break;
        case "blue":
            d2 = "red";
            break;
        default: 
            d2 = "blue;";
    }
    this.style.backgroundColor = d2;
}

function init() {
    let mycolor = document.getElementById("mycolor");
    mycolor.style.backgroundColor = "blue";
    mycolor.onclick = d1;
}

window.onload = init;