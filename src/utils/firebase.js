import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBu3vW59RSwJwud-YZAH-SgqJUAgSxuywY",
    authDomain: "newbeer-portfolio.firebaseapp.com",
    databaseURL: "https://newbeer-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newbeer-portfolio",
    storageBucket: "newbeer-portfolio.appspot.com",
    messagingSenderId: "557947537069",
    appId: "1:557947537069:web:6ea5959dcb2d7dee902824",
    measurementId: "G-JRKF2JGENZ"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;