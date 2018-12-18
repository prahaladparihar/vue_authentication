import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import VueRouter from 'vue-router' //For router
// import Routes from './routes.js'


import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'


Vue.use(VueRouter);
//router instenece
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: Login

        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ],
    mode: 'history'
});



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
    router: router,
    render: h => h(App),
}).$mount('#app')