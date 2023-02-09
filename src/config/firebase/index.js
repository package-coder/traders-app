import * as firebase from 'firebase';
import constants from "../constants"


console.log(constants)

const firebaseConfig = {
    apiKey: 'AIzaSyB7fdL9Q4gmYoOQWa8gUDC4ZXBpsmSY8xE',
    authDomain: 'traders-app-7635c.firebaseapp.com',
    projectId: "traders-app-7635c",
    storageBucket: "traders-app-7635c.appspot.com",
    messagingSenderId: "579680401913",
    appId: "1:579680401913:web:dbd1fb8c4efc87ec172528",
    measurementId: "G-4G9XE9TBFN"
}


let app
if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export default auth