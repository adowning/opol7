import Vue from 'vue'
import Vuex from 'vuex'
// import { messaging, geofire, firestore, fb } from './firebase'
import auth from './auth'
import storage from './storage'
import hardware from './hardware'
import people from './people'
import common from './common'
import firebase from './firebase'
// import { firebase } from '@firebase/app'
// import '@firebase/firestore'

// firebase.initializeApp({
//   apiKey: 'AIzaSyCBcvJvSl24XC-f1O23N42bgjdMcZwJrnA',
//   authDomain: 'opol7dev.firebaseapp.com',
//   databaseURL: 'https://opol7dev.firebaseio.com',
//   projectId: 'opol7dev',
//   storageBucket: 'opol7dev.appspot.com',
//   messagingSenderId: '1099037767188',
// })
// const settings = { /* your settings... */ timestampsInSnapshots: true }
// firebase.firestore().settings(settings)

Vue.use(Vuex)

// FCM, Firebase cloud messaging
// const fcm = messaging
// Cloud FireStore
// const firestore = firebase.firestore()

// Define database
// const database = fb.database()
// Ref to messages JSON
// const messages = database.ref().child('messages')
// Error
const error = ''
// export const auth = firebase.auth
// export const firestore = firebase.firestore
// export const storage = firebase.storage
// export const messaging = firebase.messaging
// export const db = firebase.database
// export const fb = firebase
// export default new Vuex.Store({
// const store = new Vuex.Store({
const state = {
  crews: [],
  database: firebase.database,
  firestore: firebase.firestore,
  auth: firebase.auth(),
  error: error,
  messaging: firebase.messaging,
  firebase: firebase,
  storage: firebase.storage,
  // geofire: geofire,
}
// myfirebase modules
const modules = {
  auth: auth,
  storage: storage,
  common: common,
  hardware: hardware,
  people: people,
}
// states

// mutations

// getters
const getters = {
  getFirebase: state => {
    return state.firebase
  },
}
// actions

const store = new Vuex.Store({
  state,
  modules,
  getters,
})

export default store

// export const state = () => ({
//   crews: [],
//   database: firebase.database,
//   firestore: firebase.firestore,
//   auth: firebase.auth(),
//   error: error,
//   messaging: firebase.messaging,
//   firebase: firebase,
//   storage: firebase.storage,
//   // geofire: geofire,
// })

/* eslint-disable */
// export default store
