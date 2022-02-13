// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEw5tLq97-iI33cUBSkAusZT4RFvC47t8",
    authDomain: "guan-ls-auto-service.firebaseapp.com",
    projectId: "guan-ls-auto-service",
    storageBucket: "guan-ls-auto-service.appspot.com",
    messagingSenderId: "841668630663",
    appId: "1:841668630663:web:9c283a10df5d5fb5de0022",
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

export {
    auth,
    googleAuthProvider
}