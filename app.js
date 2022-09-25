
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBd4jTG7RWe6guSsNMwCESg-SmgEygcR2c",
    authDomain: "loginsignup-eef41.firebaseapp.com",
    projectId: "loginsignup-eef41",
    storageBucket: "loginsignup-eef41.appspot.com",
    messagingSenderId: "810934973982",
    appId: "1:810934973982:web:c9a33d2e3f2e75557b200f",
    measurementId: "G-QYQH4Z2T8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();



const loginbutton = document.getElementById('loginbuttonID');

loginbutton.onclick = () => {
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    console.log(email.value, password.value)
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            swal("Log in successfull!", '', "success");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            email.value = '';
            password.value = '';
            console.log(errorMessage)
            swal({
                icon: "error",
                title: errorCode
              });
            
        });

}


