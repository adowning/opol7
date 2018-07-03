import { firebase } from '@firebase/app'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCBcvJvSl24XC-f1O23N42bgjdMcZwJrnA',
  authDomain: 'opol7dev.firebaseapp.com',
  databaseURL: 'https://opol7dev.firebaseio.com',
  projectId: 'opol7dev',
  storageBucket: 'opol7dev.appspot.com',
  messagingSenderId: '1099037767188',
})
const settings = { /* your settings... */ timestampsInSnapshots: true }
firebase.firestore().settings(settings)
// export const products = firebase.firestore().collection('products')
// export const hardwares = firebase.firestore().collection('hardwares')
// export const stats = firebase.firestore().collection('stats')
// export const auth = firebase.auth
// export const firestore = firebase.firestore
// export const storage = firebase.storage
// export const messaging = firebase.messaging
// export const db = firebase.database
// export const fb = firebase
export default firebase
