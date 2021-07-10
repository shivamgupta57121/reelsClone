import firebase from 'firebase/app';
import 'firebase/auth'; // authentication
import 'firebase/storage' // storage - to store in firebase - hard drive
import 'firebase/firestore'; // database - entries
import {firebaseConfig} from './firebaseConfig';
// console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;