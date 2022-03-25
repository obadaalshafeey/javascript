class book {
constructor (title,auther,year){
 
    this.title=title
    this.auther=auther
    this.year=year

}

getsummary(){
return `${this.title} was written by ${this.auther} in ${this.year}`;



}

getage(){
const years= new Date().getFullYear()
this.year;
return`${this.title} is ${years} years old`;

}


revise(newyear){

this.year=newyear
this.revised=true

}






}

const book1=new book (`darkside`,`obada`,`2022`);
console.log(book1);
book1.revise("2020")
console.log(book1);
console.log(book1. getsummary());
console.log(book1. getage());

