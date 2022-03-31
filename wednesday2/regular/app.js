// egular Expression

//   Ranges

//   - Part 1
//   (X|Y) => X Or Y
//   [0-9] => 0 To 9
//   [^0-9] => Any Character Not 0 To 9
//   Practice

//   - Part 2
//   [a-z]
//   [^a-z]
//   [A-Z]
//   [^A-Z]
//   [abc]
//   [^abc]

// *//

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));






// Regular Expression

//   Character Classes
//   . => matches any character, except newline or other line terminators.
//   \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
//   \W => matches Non word characters
//   \d => matches digits from 0 to 9.
//   \D => matches non-digit characters.
//   \s => matches whitespace character.
//   \S => matches non whitespace character.
// */

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com |net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));