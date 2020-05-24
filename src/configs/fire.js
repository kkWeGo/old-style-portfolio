import firebase from 'firebase'

var config = { 
    apiKey: "AIzaSyB4A62irffadTB7xuhGn_P3ywh-oCdD5hc",
    authDomain: "portfolio-np.firebaseapp.com",
    databaseURL: "https://portfolio-np.firebaseio.com",
    projectId: "portfolio-np",
    storageBucket: "portfolio-np.appspot.com",
    messagingSenderId: "605372162833",
    appId: "1:605372162833:web:a8814c23d5100885ed22b0"
};

var fire = firebase.initializeApp(config);
var db = fire.firestore();

export { fire, db };