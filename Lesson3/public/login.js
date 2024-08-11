import Register from "./register.js"
import app from "./app.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"


class Login{
    $txtEmail
    $txtPassword
    $btnSubmit
    $formLogin
    $txtGotoRegister
    $firebaseAuth
    
    constructor(firebaseAuth){
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.placeholder = "Enter your email..."
        this.$txtEmail.type = "email"
        
        this .$txtPassword = document.createElement("input")
        this.$txtPassword.placeholder = "Enter your password..."
        this.$txtPassword.type = "password"

        this .$formLogin = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "submit"

        this.$txtGotoRegister = document.createElement("a")
        this.$txtGotoRegister.innerHTML = "Register your new account"
        this.$txtGotoRegister.addEventListener("click", this.gotoRegister)

        this.$firebaseAuth = firebaseAuth
    }

    initRender = (container) =>{
        const flexcontainer = document.createElement("div")
        flexcontainer.classList.add("d-flex", "centering", "flex-column")
        const tittle = document.createElement("h2")
        tittle.innerHTML = "Login"

        flexcontainer.appendChild(tittle)
        flexcontainer.appendChild(this.$txtEmail)
        flexcontainer.appendChild(this.$txtPassword)
        flexcontainer.appendChild(this.$btnSubmit)

        this.$formLogin.appendChild(flexcontainer)
        this.$formLogin.addEventListener("submit", this.login)
        container.appendChild(this.$formLogin)

        flexcontainer.appendChild(this.$txtGotoRegister)

        this.$errorMessage = document.createElement("p")
        flexcontainer.appendChild(this.$errorMessage)
        this.$errorMessage.style.display = "none"
    }

    gotoRegister = () => {
        const register = new Register(this.$firebaseAuth)
        app.changeActiveScreen(register)
    }

    login = (e) =>{
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value
        const userName = this.$txtEmail.value

        if (userName === ""){
            this.setError("Nhập cái email vô coi")
        }
        if (pass === ""){
            this.setError("Nhập cái pass vô coi")
        }

        signInWithEmailAndPassword(this.$firebaseAuth, email, pass)
            .then((userCredential) => {
                var user = userCredential.user
                console.log(user)
                localStorage.setItem('token',user.accsessToken)
                console.log(user.accsessToken)
            }).catch((error) =>{
                console.log(error.code)
                console.log(error.message)
                this.setError(error.message)
            })
    }
    setError = (content) =>{
        this.$errorMessage.innerHTML = content
        if (content !== ""){
            this.$errorMessage.style.display = "block"
        }
        else {
            this.$errorMessage.style.display = "none"
        }
    }
}

export default Login
