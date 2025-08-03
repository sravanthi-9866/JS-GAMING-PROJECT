// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASLZDWRPja6nPrkNeIBo7LS8yAUChH71w",
    authDomain: "games-eab01.firebaseapp.com",
    projectId: "games-eab01",
    storageBucket: "games-eab01.firebasestorage.app",
    messagingSenderId: "851870652924",
    appId: "1:851870652924:web:2b16f118fb423ba2bcfa79",
    measurementId: "G-JJCWRJ07L9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Submit = document.getElementById('submit');
console.log(Submit);
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const auth = getAuth();

Submit.addEventListener('click', function (event) {
    ;

    event.preventDefault()
    const email = document.getElementById('email').value;
    console.log(email);

    const password = document.getElementById('password').value;
    console.log(password);
     


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logged in Successfully");
            window.location.href = "./index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})





