import Login from "./login.js"


import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyApTrjuY_N9J6zCSLr8teRcTvLz9Xbe9bQ",
    authDomain: "jsi08-85da9.firebaseapp.com",
    projectId: "jsi08-85da9",
    storageBucket: "jsi08-85da9.appspot.com",
    messagingSenderId: "429892639979",
    appId: "1:429892639979:web:7ff75be1eb381a869ab2ae",
    measurementId: "G-NQ1HW878Y8"
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

class App{
    activeScreen
    container

    constructor(container){
        this.container = container
    }

    changeActiveScreen(screen){
        this.container.innerHTML = ""
        this.activeScreen = screen
        this.activeScreen.initRender(this.container)
    }
}

const container = document.getElementById("app")

const login = new Login(firebaseAuth)


const app = new App(container)
app.changeActiveScreen(login)

export default app