/**
 * Created by Anonmous on 2/27/2017.
 */
import firebase from 'firebase';

try{
    const firebaseConfig = {
        apiKey: "AIzaSyAlRWu6Jnw837yIWF00xkdcdUIpdA1b_2I",
        authDomain: "blood-bank-system.firebaseapp.com",
        databaseURL: "https://blood-bank-system.firebaseio.com",
        storageBucket: "blood-bank-system.appspot.com",
        messagingSenderId: "856869960024"
    };

   var firebaseApp = firebase.initializeApp(firebaseConfig);
}catch (e){

}


export default firebase;
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();