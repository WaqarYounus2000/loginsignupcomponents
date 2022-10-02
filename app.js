import { Loginfunction } from "./signup/firebase1.js"

const loginbutton = document.getElementById('loginbuttonID');


// window.onload = () => {

//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const uid = user.uid;
//             alert('user is logged in ' + uid)
//             window.location.replace('profile.html');
//         } 
//         else {
//             alert('user is logged out ');
//             window.location.replace('https://www.google.com');
//         }
//     })

// }
loginbutton.onclick = async () => {
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    
    let gettingdata  =  Loginfunction(email.value, password.value);
    console.log('this line should be after data printing');
    console.log('///////////////////////////////////////////////////////////////////////////////////////');
    console.log('data from server:' + gettingdata);
    
    
    
}








const logoutbutton = document.getElementById('logoutbutton');
logoutbutton.onclick = () => {
    UserloggedOut();
    
}









////////////////////////////////////////////EYE Function to show password/////////////////////////////////

const passeye = document.getElementById('passwordEye');
passeye.onmousedown = () => {
    console.log('clicked')
    document.querySelectorAll('input[type="password"]')[0].type = 'text';
    passeye.style.opacity = '1';
    
}
passeye.onmouseup = () => {
    console.log('clicked')
    document.querySelectorAll('input[type="text"]')[0].type = 'password';
    passeye.style.opacity = '0.3';
}