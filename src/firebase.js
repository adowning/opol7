import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD-BsWzPHYrXvuQsh0NeXF9u9T82JYzbQA',
  authDomain: 'opol6-dev.firebaseapp.com',
  databaseURL: 'https://opol6-dev.firebaseio.com',
  projectId: 'opol6-dev',
  storageBucket: 'opol6-dev.appspot.com',
  messagingSenderId: '258468941701',
})

export const products = firebase.firestore().collection('products')
export const hardwares = firebase.firestore().collection('hardwares')
export const stats = firebase.firestore().collection('stats')
export const fb = firebaseApp
