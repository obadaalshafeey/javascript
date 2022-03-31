//  All the exercises should use while loop:

//  Please be sure to connect this file to another HTML file

//  Don’t search on the internet except if it is written in the           question

// You should solve all the question by what you understand from the lecture
//  and with your pair not solo

//  And don’t look or use a code that you wrote before 

// console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(d1){
let sol=d1;
while(d1>0){

    d1-=1
    sol-=d1   
}
return sol;
}
console.log(subtract(2) +" ,"+subtract(5)+" ,"+subtract(9));
document.write(subtract(2) +" ,"+subtract(5)+" ,"+subtract(9))




/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(d1){
let sol=1;
while (d1>1) {
   
    sol*=d1;
   d1--;
}

return sol;


}
console.log(factorial(2)+ ", " +factorial(4));





/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

console.log(repeatStr("to",2));
function repeatStr(d1,sol){
    let x="";
    let i=sol;
    while(i!==0){
        x+=d1;
        x+=" ";
        i--;
    }
    return x;
}
console.log(repeatStr("to",4));
function repeatStr(d1,sol){
    let x="";
    let i=sol;
    while(i!==0){
        x+=d1;
        x+=" ";
        i--;
    }
    return x;
}







/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

console.log(sum2(3,6));
function sum2(num1,num2){
     let i=num1;
     let sum=0;
    while(i>=num1 && i<=num2){
        sum+=i;
        i++;
    }
    return sum;
}
console.log(sum2(2,4));
function sum2(num1,num2){
     let i=num1;
     let sum=0;
    while(i>=num1 && i<=num2){
        sum+=i;
        i++;
    }
    return sum;
}


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
console.log(repeatStr2("ro","fff"));
function repeatStr2(str1,str2){
    let i=str2.length;
    let newStr="";
    while(i!==0){
        newStr+=str1;
        newStr+=" ";
        i--;
    }
    return newStr;
}


/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/


/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

console.log(muti2(3,6));
function muti2(num1,num2){
     let i=num1;
     let multi=1;
    while(i>=num1 && i<=num2){
        multi*=i;
        i++;
    }
    return multi;
}


/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/


/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(a) {
   let arr=[]
    while (a>0) {
    arr.push(a)
a--
    }
    if (a==0) {
        arr.push("done")
    }
    return `${arr.join(', ')}`
}

console.log(countDown(9));

/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
console.log(multiplication2(5,4));
function multiplication2(num1,num2){
    return num1*num2;


}

console.log(multiplication2(4,4));
function multiplication2(num1,num2){
    return num1*num2;


}
console.log(multiplication2(7,6));
function multiplication2(num1,num2){
    return num1*num2;


}


/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/


/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
console.log(repeatChar("school","O"))
function repeatChar(str,char){
    let count=0;
    let i=0;
    while(i<str.length){
        if(char.toLowerCase()==str.charAt(i)){
            count++;
        }
        i++;
    }
    return count;}









