import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCBRhmR3NcFkUnSevazsInxK8pFlnR2lUQ",
    authDomain: "lawnmower-36a9d.firebaseapp.com",
    databaseURL: "https://lawnmower-36a9d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lawnmower-36a9d",
    storageBucket: "lawnmower-36a9d.appspot.com",
    messagingSenderId: "337191156716",
    appId: "1:337191156716:web:58e98e112399bf61561ec9",
    measurementId: "G-7L8N2X7XNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



