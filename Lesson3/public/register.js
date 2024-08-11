
import Login from "./login.js"
import app from "./app.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"

class Register{
    $txtEmail
    $txtPassword
    $txtPasswordRegister
    $btnSubmit
    $formRegister
    $firebaseAuth
    
    constructor(firebaseAuth){
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.placeholder = "What's your name..."
        this.$txtEmail.type = "email"
        
        this .$txtPassword = document.createElement("input")
        this.$txtPassword.placeholder = "Enter your password..."
        this.$txtPassword.type = "password"

        this .$txtPasswordRegister = document.createElement("input")
        this.$txtPasswordRegister.placeholder = "Enter your password again..."
        this.$txtPasswordRegister.type = "password"

        this .$formRegister = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "submit"

        this.$firebaseAuth = firebaseAuth
    }

    initRender = (container) =>{
        const flexcontainer = document.createElement("div")
        flexcontainer.classList.add("d-flex", "centering", "flex-column")
        const tittle = document.createElement("h2")
        tittle.innerHTML = "Register"

        flexcontainer.appendChild(tittle)
        flexcontainer.appendChild(this.$txtEmail)
        flexcontainer.appendChild(this.$txtPassword)
        flexcontainer.appendChild(this.$txtPasswordRegister)
        flexcontainer.appendChild(this.$btnSubmit)

        this.$formRegister.appendChild(flexcontainer)
        this.$formRegister.addEventListener("submit", this.register)
        container.appendChild(this.$formRegister)

        this.$txtGotoLogin = document.createElement("a")
        this.$txtGotoLogin.innerHTML = "Already have account"

        flexcontainer.appendChild(this.$txtGotoLogin)

        this.$txtGotoLogin.addEventListener("click", this.GotoLogin)

        this.$errorMessage = document.createElement("p")
        flexcontainer.appendChild(this.$errorMessage)
        this.$errorMessage.style.display = "none"
    }

    GotoLogin = () =>{
        const login = new Login()
        app.changeActiveScreen(login)
    }

    register = (e) =>{
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value
        const userName = this.$txtEmail.value
        const confirmPass = this.$txtPasswordRegister.value

        if (userName === ""){
            this.setError("Nhập cái email vô coi")
        }
        if (pass === ""){
            this.setError("Nhập cái pass vô coi")
        }
        if (confirmPass === ""){
            this.setError("Nhập cái confirm pass vô coi")
        }
        if (pass !== confirmPass){
            this.setError("Nhập cho đúng cái pass  ")
        }

        createUserWithEmailAndPassword(this.$firebaseAuth, email, pass)
            .then((userCredential) => {
                var user = userCredential.user
                console.log(user)
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



export default Register