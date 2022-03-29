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