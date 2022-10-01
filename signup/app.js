import { signupfunction } from './firebase1.js'




const signupbutton = document.getElementById('signupbuttonID');

signupbutton.onclick = () => {
 
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    console.log(email.value,password.value)
    signupfunction(email.value,password.value);
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







