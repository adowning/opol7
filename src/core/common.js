export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const SET_USER = 'SET_USER'
export const SET_ISLOGGEDIN = 'SET_ISLOGGEDIN'
// import firebase from './firebaseInit'
import * as db from '../firebase'
const firebase = db.fb
// import firebase from 'firebase'
import Firebase from 'firebase'
// initial state
const state = {
  message: {
    visible: false,
    text: '',
    icon: '',
    color: '',
  },
  user: null,
  isLoggedIn: false,
}

// getters
const getters = {
  message: state => state.message,
  user: state => state.user,
}
const mutations = {
  [SHOW_MESSAGE](state, message) {
    /* eslint-disable-next-line */
    message.visible = true
    state.message = message
  },
  [SET_USER](state, user) {
    /* eslint-disable-next-line */
    state.user = user
  },
  [SET_ISLOGGEDIN](state, bool) {
    /* eslint-disable-next-line */
    state.isLoggedIn = bool
  },
}
// actions
function setupUser() {
  var user = firebase.auth().currentUser

  user
    .updateProfile({
      displayName: 'Ash Downing',
      photoURL: 'https://groupandrews.com/profiles/pictures/1.jpg',
    })
    .then(function() {
      // Update successful.
      console.log(user.displayName)
    })
    .catch(function(error) {
      // An error happened.
      console.log(error)
    })
}

const actions = {
  showMessage({ commit }, message) {
    commit(SHOW_MESSAGE, message)
  },
  setUser({ commit }, user) {
    if (user) {
      commit(SET_ISLOGGEDIN, false)
      // console.log(firebase)
      // console.log(user)
      if (!user.displayName) {
        setupUser()
      }
      commit(SET_USER, user)

      // since I can connect from multiple devices or browser tabs, we store each connection instance separately
      // any time that connectionsRef's value is null (i.e. has no children) I am offline
      var myConnectionsRef = firebase.database().ref('users/joe/connections')

      // stores the timestamp of my last disconnect (the last time I was seen online)
      var lastOnlineRef = firebase.database().ref('users/joe/lastOnline')

      var connectedRef = firebase.database().ref('.info/connected')
      console.log(Firebase.database.ServerValue.TIMESTAMP)

      connectedRef.on('value', function(snap) {
        if (snap.val() === true) {
          // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
          var con = myConnectionsRef.push()

          // When I disconnect, remove this device
          con.onDisconnect().remove()

          // Add this device to my connections list
          // this value could contain info about the device or a timestamp too
          con.set(true)
          // When I disconnect, update the last time I was seen online
          lastOnlineRef
            .onDisconnect()
            .set(Firebase.database.ServerValue.TIMESTAMP)
        }
      })
      //   var isOnlineForDatabase = {
      //     state: 'online',
      //     username: user.displayName,
      //     last_changed: firebase.database().ServerValue.TIMESTAMP,
      //   }

      //   var isOnlineForFirestore = {
      //     state: 'online',
      //     username: user.displayName,
      //     last_changed: firebase.firestore.FieldValue.serverTimestamp(),
      //   }
      //   state.uid = user.uid
      //   state.username = user.displayName
      //   state.user = user
      //   var uid = state.uid

      //   var userStatusDatabaseRef = firebase.database().ref('/status/' + uid)
      //   // var userStatusDatabaseRef = firebase.database().ref('/status/' + uid)
      //   var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid)
      //   userStatusFirestoreRef.set(isOnlineForFirestore)
      //   console.log(userStatusDatabaseRef)
      //   userStatusDatabaseRef.set(isOnlineForDatabase)
      // } else {
      //   var isOfflineForDatabase = {
      //     state: 'offline',
      //     username: state.username,
      //     last_changed: firebase.database.ServerValue.TIMESTAMP,
      //   }

      //   var isOfflineForFirestore = {
      //     state: 'offline',
      //     username: state.username,
      //     last_changed: firebase.firestore.FieldValue.serverTimestamp(),
      //   }

      //   var uid = state.uid
      //   console.log(uid)
      //   if (!uid || uid == 'undefined') {
      //     return
      //   }
      //   var username = state.username
      //   console.log(username)
      //   if (!username || username == 'undefined') {
      //     return
      //   }
      //   var userStatusDatabaseRef = firebase.database().ref('/status/' + uid)
      //   var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid)
      //   userStatusFirestoreRef.set(isOfflineForFirestore)
      //   userStatusDatabaseRef.set(isOfflineForDatabase)
      //   state.user = null
      //   state.username = null
      //   state.uid = null
    } else {
      commit(SET_ISLOGGEDIN, false)
      commit(SET_USER, user)
    }
  },
}

// mutations

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
