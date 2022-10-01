import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { doc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
export var glob  = 'hello dear'
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const database = getDatabase();
const db = getFirestore();


signupfunction(email, password)
{
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            // storing data to firestore database
            await setDoc(doc(db, "users", user.uid), {
                Email: email,
                Password: password,
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
            console.log("Erro==> ", errorMessage)
            swal({
                icon: "error",
                title: errorCode
            });
            // ..
        });

}





export {signupfunction};