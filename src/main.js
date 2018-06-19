// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { firebase } from './core/firebaseInit'
import Vue from 'vue'
import App from './core/App'
import router from './core/routes'
import Vuetify from 'vuetify'
import store from './core/store'
// import firebase from 'firebase';
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import VueFire from 'vuefire'
// var Firebase = require("firebase");

// explicit installation is required in a module environment
Vue.use(VueFire)

//import { isNonNullObject } from '@firebase/util';

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#41b883',
    secondary: '#0092db',
    vueorange: 'e96900',
    vuepurple: 'ae81ff',
    vueblue: '0092db',
    accent: '#8c9eff',
    error: '#b71c1c',
    info: '#0092db',
    success: '#4CAF50',
    warning: '#FFC107',
  },
})

firebase.auth().onAuthStateChanged(function(user) {
  store.commit('setUser', user)

  new Vue({
    el: '#app',
    store: store,
    firebase,
    router,
    render: h => h(App),
  })
})
