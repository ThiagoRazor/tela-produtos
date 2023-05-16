import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')



const firebaseConfig = {
    apiKey: "AIzaSyCdQjZf_8KLcZe-UXU-2hgns-ITNuFBzFI",
    authDomain: "catalogo-database-6f330.firebaseapp.com",
    databaseURL: "https://catalogo-database-6f330-default-rtdb.firebaseio.com",
    projectId: "catalogo-database-6f330",
    storageBucket: "catalogo-database-6f330.appspot.com",
    messagingSenderId: "813555562828",
    appId: "1:813555562828:web:4ebdf208b2ccceb5f777e9",
    measurementId: "G-RMHX6D313S"
}

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth()

export { app, analytics, db, auth };