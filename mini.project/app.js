let formOrder=document.getElementById("mobForm");
let tableItem=document.getElementById("boadTa");

let mobileinfo=[];

function mobile(useName,typeNameD) {
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price= pricemobile(50,500);
    this.cond=condition()

    mobileinfo.push(this);
    informationprint();
    console.log();

}

function pricemobile(min,max) {

    return Math.ceil(Math.random() * (max - min) + min);
}

function condition() {
    let pric1=mobile.price;
    if(pric1<100){
        return "used";
       }else{
          return "new device";
       }

}

formOrder.addEventListener("submit",handelsubmit);
function handelsubmit(event) {
    event.preventDefault();
    let useName=event.target.useName.value;
    console.log(useName);
    let typeNameD=event.target.typeNameD.value;
    console.log(typeNameD);
   
    new mobile(useName,typeNameD)

}
handelsubmit();

function informationprint() {
    let trElement = document.createElement("tr");
    let tdElement4 = document.createElement("td");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");

    for (let i = 0; i < mobileinfo.length; i++){
        tableItem.appendChild(trElement);
        trElement.appendChild(tdElement4);
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);
        trElement.appendChild(tdElement3);
        tdElement4.textContent =  mobileinfo[i].useName;
        tdElement1.textContent =  mobileinfo[i].typeNameD;
        tdElement2.textContent =  mobileinfo[i].price;
        tdElement3.textContent =  mobileinfo[i].cond;

    }
}


// //////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
let form= document.getElementById('locForm');
let result= document.getElementById("cityResult");
let showRes= document.getElementById("btn2");
let img= document.getElementById("img");

showRes.addEventListener('click',showLocation);

function showLocation(){
    let loc_name= document.getElementById("loc_Name").value;

    new locConstructor(loc_name)
}

function locConstructor(loc_name){
    this.location= loc_name;
    console.log(this);
    showOnPage(this.location)
}
async function showOnPage(x){
    let locReq= await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.1dd34aa6546423b1c1d1a72ee949f992&q=${x}&format=json`)
    let data=await locReq.json()
    console.log(data);
    
    
    result.innerHTML = `<h3 style="display:inline;"> location :</h3> ${data[0].display_name} <br> 
    <h3 style="display:inline;">lat:</h3> ${data[0].lat} <br> 
    <h3 style="display:inline;">lon:</h3> ${data[0].lon}`;
    img.src= `${data[0].icon}`;   
    
   
}
