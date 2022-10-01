import { signupfunction } from "../firebase.js"



const signupbutton = document.getElementById('signupbuttonID');
signupbutton.onclick = () => {
 
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    console.log('signup horaha hai')
    signupfunction(email.value,password.value);

    console.log('signup hogya hai');
}

/////////////////////////////////////////////////////////////////////////////////////////



const passeye = document.getElementById('passwordEye');
passeye.onmousedown=()=>{
    console.log('clicked')
    document. querySelectorAll('input[type="password"]')[0].type = 'text';
    passeye.style.opacity = '1';
    
}
passeye.onmouseup=()=>{
    console.log('clicked')
    document. querySelectorAll('input[type="text"]')[0].type = 'password';
    passeye.style.opacity = '0.3';
}







