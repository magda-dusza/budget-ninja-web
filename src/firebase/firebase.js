import firebase from 'firebase/app';
import 'firebase/auth';
import { apiKey } from '../../src/environment';

const config = {
    apiKey: apiKey,
    authDomain: "bookcase-97b18.firebaseapp.com",
    databaseURL: "https://bookcase-97b18.firebaseio.com",
    projectId: "bookcase-97b18",
    storageBucket: "bookcase-97b18.appspot.com",
    messagingSenderId: "968262563403"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};