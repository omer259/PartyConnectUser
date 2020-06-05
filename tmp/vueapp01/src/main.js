import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBqKYrTkOE5yUZbl781tofjJa0JMMj223s',
  authDomain: 'partyconnect-d6c27.firebaseapp.com',
  databaseURL: 'https://partyconnect-d6c27.firebaseio.com',
  projectId: 'partyconnect-d6c27',
  storageBucket: 'partyconnect-d6c27.appspot.com',
  messagingSenderId: '1045907699759',
  appId: '1:1045907699759:web:52c0385d05a57ceac42eda'
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
