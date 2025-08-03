
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth();

// Event listener for submit button


const Submit = document.getElementById('submit');
console.log(Submit);

Submit.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
            alert("Account successfully created!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});












