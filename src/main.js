// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import { firebase } from './core/firebaseInit'
// import { Plugins } from '@capacitor/core'

// const { Geolocation } = Plugins

// class GeolocationExample {
//   async getCurrentPosition() {
//     const coordinates = await Geolocation.getCurrentPosition()
//     console.log('Current', coordinates)
//   }

//   watchPosition() {
//     const wait = Geolocation.watchPosition({}, (position, err) => {
//       console.log(position)
//       console.log(err)
//     })
//   }
// }

import Vue from 'vue'
import App from './core/App'
import router from './core/routes'
import vuetify from './plugins/vuetify'
import store from './core/store'
import 'firebaseui/dist/firebaseui.css'
import Notifications from 'vue-notification'
import VueFirestore from 'vue-firestore'
import { fb } from './firebase'
Vue.use(VueFirestore)

Vue.use(Notifications)

Vue.config.productionTip = false

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
