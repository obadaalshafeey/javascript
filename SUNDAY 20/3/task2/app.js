"use strict";

let day = prompt("enter a number");




switch (day) {
    case "1":
        console.log("sunday");
        day = ("sunday");
        break;

    case "2":
        console.log("monday");
        day = ("monday");
        break;

    case "3":
        console.log("tuesday");
        day = ("tuesday");
        break;

    case "4":
        console.log("wednesday");
        day = ("wednesday");
        break;

    case "5":
        console.log("thursday");
        day = ("thursday");
        break;

    case "6":
        console.log("friday");
        day = ("friday");
        break;

    case "7":
        console.log("saturday");
        day = ("saturday");
        break;



}
{document.getElementById("d1").innerHTML = day;}

