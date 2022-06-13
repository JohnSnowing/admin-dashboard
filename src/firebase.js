// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnBlK7ksKvcd01Gz7H3uHOQJXXMC7q7C8",
    authDomain: "netflix-f1be9.firebaseapp.com",
    projectId: "netflix-f1be9",
    storageBucket: "netflix-f1be9.appspot.com",
    messagingSenderId: "460348176697",
    appId: "1:460348176697:web:61766982995c4d437810e8",
    measurementId: "G-QW5P6DCP1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
//import storage
const analytics = getAnalytics(app);

export default storage;
