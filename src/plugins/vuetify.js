import Vue from 'vue'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import '../assets/stylus/vueify.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#42B983',
    // secondary: '#212121',
    secondary: '#82B1FF',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
})
