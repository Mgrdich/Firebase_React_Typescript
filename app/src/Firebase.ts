import firebase from "firebase/app";

import "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDD88_zGD6Qyydp7X5sWJ8aPW0w3TqdECk",
    authDomain: "man-city-fa87e.firebaseapp.com",
    databaseURL: "https://man-city-fa87e.firebaseio.com",
    projectId: "man-city-fa87e",
    storageBucket: "man-city-fa87e.appspot.com",
    messagingSenderId: "690013146834",
    appId: "1:690013146834:web:294fc830613dbcdff6e70b",
    measurementId: "G-CNG89G11Z3"
};

firebase.initializeApp(firebaseConfig);