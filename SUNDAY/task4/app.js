let one =prompt("please enter the 1 value ");
let two =prompt("please enter the 2 value");
let three =prompt("please enter the 3 value");

let o=Number(one);
let b=Number(two);
let a=Number(three);


if ( o % 3 ==0 || b % 3 ==0 || a % 3 ==0 ) {
    console.log("fizz");
    document.write("fizz");
}

if (o % 5 ==0 || b % 5 ==0 || a %5 ==0) {
    console.log("buzz");
    document.write("buzz");
}

if (o % 5 ==0 && o % 3 ==0 || b % 5 ==0 && b % 3 ==0|| a %5 ==0 &&  a % 3 ==0 ) {
    console.log(" fizzbuzz");
    document.write("fizzbuzz");
}

