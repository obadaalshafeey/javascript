'use strict';


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
 
  

  let firstname =document.getElementById("fn")
  let lastname =document.getElementById("la")
  let emaill =document.getElementById("email")
  let emailc =document.getElementById("emailc")
  let password =document.getElementById("pas")
  let passwordc =document.getElementById("pasc")
  let birthday =document.getElementById("birthdayy")
let regform=document.getElementById("myForm")

function getinfo(firstname,lastname,email,emailc,pas,pasc,birthdayy) {
  
  this.fn=firstname;
  this.la=lastname;
  this.email=email;
  this.emailc=emailc;
  this.password=pas;
  this.passwordc=pasc;
  this.birthday=birthdayy;
  



this.fullname=checkinfo(this.fn,this.la)

}
// function checkinfo(fn,la) {
//   let xx = /[a-zA-Z\s]+$/;

//   if (xx.test(fn)$$(xx.test(la))) 

// return fn+(la
//   else {

//     return `erorr the name is not cor`
//   }



// }



regform.addEventListener("submit",handelsubmit)

function handelsubmit(e) {
  e.preventDefault();
let name=e.target.name.value;
let namee=e.target.namee.value;

let email=e.target.email.value;
let emailv=e.target.emailv.value;
let pswv=e.target.pswv.value;
let pswvv=e.target.pswvv.value;
let birthday=e.target.birthday.value;

new getinfo(name,namee,email,emailv,pswv,pswvv,birthday)


}










