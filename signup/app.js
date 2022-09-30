
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const database = getDatabase();
const db = getFirestore();



const signupbutton = document.getElementById('signupbuttonID');


signupbutton.onclick = () => {
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
        const user = userCredential.user;
        // storing data to firestore database
        await setDoc(doc(db, "users", user.uid), {
          Email:email.value,
          Password:password.value,
        });
           
        swal("Congratulation!", "Your Account Has been Created Successfully!", "success");
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("Email sent");
          })
          .catch((err) => console.log(err));
       
    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Erro==> ",errorMessage)
        swal({
            icon: "error",
            title: errorCode
          });
        // ..
    });
    
}









/////////////////////////////////////////////////////////////////////////////////////////



const passeye = document.getElementById('passwordEye');
passeye.onmousedown=()=>{
    // console.log('clicked')
    document. querySelectorAll('input[type="password"]')[0].type = 'text';
    passeye.style.opacity = '1';
    
}
passeye.onmouseup=()=>{
    console.log('clicked')
    document. querySelectorAll('input[type="text"]')[0].type = 'password';
    passeye.style.opacity = '0.3';
}


// document.querySelector('#signupbuttonID').disabled = true;
// const button = document.signupbuttonID('signupbuttonID')
// button.disabled = true;
// console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked)

// if (document.querySelectorAll('input[type="checkbox"]')[0].checked){

//     // const button = document.signupbuttonID('signupbuttonID')
//     button.disabled = false;
//     console.log('disabled')
// }
   
    




