import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router' //For router


import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'


Vue.use(VueRouter);
Vue.use(Vuelidate);
//router instenece
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            name: 'login',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
<<<<<<< HEAD
            component: Login,
=======
            component: Login
>>>>>>> 222c74e1e0563ee96043bd8275825cbe17901e69
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ],
    mode: 'history'
});

//Guards vue-router
<<<<<<< HEAD
// router.beforeEach((to, from, next) => {
//     let currentUser = firebase.auth().currentUser;
//     let requiresAuth = to.matched.some(record.meta.requiresAuth);


//   // check here !
//     if (requiresAuth && !currentUser) {
//         next('login');
//     } else if (!requiresAuth && currentUser) {
//         next('');
//     } else {
//         next();
//     }
// });
=======
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record.meta.requiresAuth);


    // check here !
    if (requiresAuth && !currentUser) {
        next('login');
    } else if (!requiresAuth && currentUser) {
        next('/');
    } else {
        next();
    }
});
>>>>>>> 222c74e1e0563ee96043bd8275825cbe17901e69



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
    validations: {},
    render: h => h(App),
}).$mount('#app')