import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
const settings = {/* your settings... */ timestampsInSnapshots: true };
firebaseApp.firestore().settings(settings);
export default firebaseApp.firestore()