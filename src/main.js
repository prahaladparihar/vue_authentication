import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

Vue.component('HelloWorld', HelloWorld)
Vue.component('login', Login)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAQpcY2zy8HlJeP7TWyP0dLM9yC6aIZ2gA",
    authDomain: "vue-autho.firebaseapp.com",
    databaseURL: "https://vue-autho.firebaseio.com",
    projectId: "vue-autho",
    storageBucket: "vue-autho.appspot.com",
    messagingSenderId: "987248780943"
};
firebase.initializeApp(config);

window.firebase = firebase;


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')