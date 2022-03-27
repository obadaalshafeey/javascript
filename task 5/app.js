// class book {
// constructor (title,auther,year){
 
//     this.title=title
//     this.auther=auther
//     this.year=year

// }

// getsummary(){
// return `${this.title} was written by ${this.auther} in ${this.year}`;



// }

// getage(){
// const years= new Date().getFullYear()
// this.year;
// return`${this.title} is ${years} years old`;

// }


// revise(newyear){

// this.year=newyear
// this.revised=true

// }






// }

// const book1=new book (`darkside`,`obada`,`2022`);
// console.log(book1);
// book1.revise("2020")
// console.log(book1);
// console.log(book1. getsummary());
// console.log(book1. getage());











// let price=200;
// let dis=false
// let disa=30;
// if (dis===true) {
//     price-=disa;
// } else {price=10
    
// }
// console.log(price);

// function sayhello(userName,age) {
//     if (age <20){
//         console.log(`app is not suitable for you`);
//     }else{
//         console.log(`hello ${userName} your age is ${age}`);

//     }
// }
//  sayhello("obada",40);
//  sayhello("khaled",90);
//  sayhello("mohammad",18);

function gen(start,end,excl){
for(let i= start; i<=end;i++){
    if(i===excl){
        continue
    }
    console.log(i);
}

}
gen(1998,2022,2020)


















//  function ger(stare,end) {

     
//  }


// for (let i = 0; i <10; i++)  {
//     console.log(i);
     
// }

// let myfrindes =["osama","obada","ali","khaled","mohammad"]
// for (let i=0; i<myfrindes.length; i++)
// console.log(myfrindes[i]);



// let myfrindes =[1,2,"osama","obada","ali","khaled","mohammad"]

// let onlyname=[];

// let products =["kebord","mouse","pen","pad"]
// let color=["red","green","black"]
// let models=[2020,2021]
// for (let i=0 ; i<products.length; i++){

//     console.log("#".repeat(2));
// console.log(`# ${products}`);
//     console.log("#".repeat(10));
//     for (let j=0;j<color.length;j++){
//         console.log(color[j]);


//     }

// }



// let myfrindes =["osama","obada","ali","khaled","mohammad"]
// let i=0;
// // // while (index <10) {
// // //     console.log(index);
// // //     index+=1;
   
// // }
// do {
//     console.log(i);
//     i++;

// }while (false);
// console.log(i);