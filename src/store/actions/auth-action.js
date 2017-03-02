/**
 * Created by Anonmous on 2/27/2017.
 */
import firebase,{ firebaseAuth, firebaseDb} from '../../config/firebase';
import {
    SIGN_IN,
    SIGN_OUT,
    REGISTER

} from './action-types';

export function registerWithCustom(credentials) {
    return {
        type: REGISTER,
        payload: credentials
    };
}

export function signInWithCustom(credentials) {
    return {
        type: SIGN_IN,
        payload: credentials
    };
}

export function signOut() {
    return {
        type: SIGN_OUT
    };
}

export function donorDetailAction(donorsDetail) {
   return {
        type:"DONOR_DETAILS",
        payload:donorsDetail
    }
}

// export function fetchDonorsFromServer(dispatch){
//     return()=>{
//         return firebase.database().ref().child('users').orderByChild('role').equalTo("donor")
//             .once('value', snapshot => {
//                 console.log(snapshot.val());
//                 return dispatch(fetchDonors(snapshot.val()))
//             });
//     }
// }

