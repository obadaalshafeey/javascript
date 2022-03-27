/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let myself={
    firstName:"obada",
    lastname:"alshafeey",
    age:23,
    dob:"28/6/19998",
    favoritefood:[`burgar`,`mansaf`,`mqloba`],
favortemovie:[`game`,`green mael`,`fure`]
}
document.getElementById("my").innerHTML = myself ;







let persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  
  /*
  2
  Using the varabile persons
  Create a function called firstName
  that accept an object
  and return all the first name of the person insides
  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  */
 var thiername =[];
     function firstName(persons) {
         for (x=0; x<persons.length;x++){

     thiername[x] = persons[x].name['first'];
    }
  
    return thiername;
  
  }
  
  console.log(firstName(persons))
  document.getElementById("my2").innerHTML = my2 ;


 
  
  
  /*
  3
  Using the varabile persons
  Create a function called averageAge
  that accept an object
  and return the average age of those persons
  
  Ex: averageAge(persons) => 41.2
  */
  function averageAge(persons) {
    obada = 0;
    for (let i = 0; i < persons.length; i++) {
   
  
      obada += persons[i].age / 2
    }
 return obada 
 }
  
  console.log(averageAge(persons))
  
  console.log(firstName(persons))
  document.getElementById("my3").innerHTML = obada ;
  
  
  /*
  4
  Using the varabile persons
  Create a function called olderPerson
  that accept an object
  and return the full name of the older person
  
  Ex: olderPerson(persons) => "Soso Al-Amora"
  */
  function olderperson(x)
  {
      let highest = 0 ;
      let highestindex = 0 ; 
      let i = 0 ;
      while(i < x.length)
      {
          if (highest < x[i].age)
          {
              highestindex = i ;
              highest = x[i].age
          }
          i++
      }
      return x[highestindex].name.first + " " + x[highestindex].name.last
  }
  
  
  /*
  5
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  
  
  /*
  6
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  
  //////////////////////////////////////////////////////////////////
  
  /*
  7
  Create a function called repeatWord
  that accept a string
  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to words??
  
  Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
  
  
  
  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
  
  
  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  function selectFromObject(object,array){
    let obj={};
    for(let i=0;i<array.length;i++){
        if(Object.keys[object[i]]==array[i]){
            return object[i];
        }
    }
}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));
innerHTML=selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']);
  
  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */
  
  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
  
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
  
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */
  // function keysArray(object){
  //   let keys=Object.keys(object)
  //   return keys
  // }
  