// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import { firebase } from './core/firebaseInit'

import Vue from 'vue'
import App from './core/App'
import router from './core/routes'
import vuetify from './plugins/vuetify'
import store from './store/store'
// import 'firebaseui/dist/firebaseui.css'
import Notifications from 'vue-notification'
import VueFirestore from 'vue-firestore'
// import { firebase } from './store/firebase'
Vue.use(VueFirestore)
// Vue.use(VueFire)
Vue.use(Notifications)
Vue.config.productionTip = false
console.log(store)
// const fb = store.state.firebase
store.state.firebase.auth().onAuthStateChanged(function(user) {
  store.dispatch('common/setUser', user)
  Vue.prototype.$user = user
  new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App),
  })
})

// export const products = firebase.firestore().collection('products')
