import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

import HelloWorld from './components/HelloWorld.vue'

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

Vue.component('HelloWorld', HelloWorld)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')