'use strict';
let ulist= document.getElementById('testLi');

async function getData(){
    let responce= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.1dd34aa6546423b1c1d1a72ee949f992&q=aqaba&format=json')
    let data=await responce.json()
    console.log(data);
    data.map((v)=>
    {
        let lichild = document.createElement("li");
        let x= v.display_name.split(",",2);
        lichild.innerHTML = `<h3 style="display:inline;"> display name :</h3> ${x} <br> 
        <h3 style="display:inline;">lat:</h3> ${v.lat} <br> 
        <h3 style="display:inline;">lon:</h3> ${v.lon}`;
        ulist.appendChild(lichild);
    })
   
}
getData()

console.log("get data out side the function");