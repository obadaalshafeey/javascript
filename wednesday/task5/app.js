function checkPass()
{
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let message = document.getElementById('error-nwl');
    let goodColor = "#66cc66";
    let badColor = "#ff6666";

    if(pass1.value == pass2.value){
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "ok!"
    }
    else{
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
	
    if(pass1.length > 5){
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    }
    else{
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 6 digit!"
    }
}  
      