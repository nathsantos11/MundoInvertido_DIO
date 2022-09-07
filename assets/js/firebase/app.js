
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgJ9Lxy13ZW5pi_cSAfDM4gC7r-K9ROUE",
    authDomain: "projeto-teste-9bb5f.firebaseapp.com",
    projectId: "projeto-teste-9bb5f",
    storageBucket: "projeto-teste-9bb5f.appspot.com",
    messagingSenderId: "1031721059799",
    appId: "1:1031721059799:web:3b026daf162f6027a13792",
    measurementId: "G-ZW029XK7BN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app
