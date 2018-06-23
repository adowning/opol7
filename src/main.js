// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import { firebase } from './core/firebaseInit'
import { Plugins } from '@capacitor/core'

const { Geolocation } = Plugins

class GeolocationExample {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition()
    console.log('Current', coordinates)
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position)
      console.log(err)
    })
  }
}

import Vue from 'vue'
import App from './core/App'
import router from './core/routes'
import vuetify from './plugins/vuetify'
import store from './core/store'
// import firebase from 'firebase'
import 'firebaseui/dist/firebaseui.css'
// import VueFire from 'vuefire'
import Notifications from 'vue-notification'
// import '@firebase/firestore'
// import '@firebase/auth'
import VueFirestore from 'vue-firestore'
import { fb } from './firebase'
Vue.use(VueFirestore)

// Vue.use(VueFire)
Vue.use(Notifications)

// firebase.initializeApp({
//   // apiKey: 'AIzaSyCZ0gFo1BUNmjgK4WcEWT1lANWFVAJCy-w',
//   // authDomain: 'vue-commerce.firebaseapp.com',
//   // databaseURL: 'https://vue-commerce.firebaseio.com',
//   // projectId: 'vue-commerce',
//   // storageBucket: 'vue-commerce.appspot.com',
//   // messagingSenderId: '535877719979',
//   // const config = {
//   apiKey: 'AIzaSyD-BsWzPHYrXvuQsh0NeXF9u9T82JYzbQA',
//   authDomain: 'opol6-dev.firebaseapp.com',
//   databaseURL: 'https://opol6-dev.firebaseio.com',
//   projectId: 'opol6-dev',
//   storageBucket: 'opol6-dev.appspot.com',
//   messagingSenderId: '258468941701',
//   //   };
//   //   firebase.initializeApp(config);
// })
// const products = firebase.firestore().collection('products')
// console.log(products)
Vue.config.productionTip = false
// Vue.use(Vuetify, {
//   theme: {
//     primary: '#41b883',
//     secondary: '#0092db',
//     vueorange: 'e96900',
//     vuepurple: 'ae81ff',
//     vueblue: '0092db',
//     accent: '#8c9eff',
//     error: '#b71c1c',
//     info: '#0092db',
//     success: '#4CAF50',
//     warning: '#FFC107',
//   },
// })

fb.auth().onAuthStateChanged(function(user) {
  store.dispatch('common/setUser', user)
  Vue.prototype.$user = user
  new Vue({
    el: '#app',
    store: store,
    fb,
    router,
    render: h => h(App),
  })
})

// export const products = firebase.firestore().collection('products')
