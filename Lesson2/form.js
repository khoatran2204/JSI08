class MyForm {
    input = null
    button = null
    constructor(){
        this.input = document.createElement("input")
        this.button = document.createElement("button")

        this.button.innerHTML = "Get Form"
        this.button.addEventListener("click", () => {
            console.log(this.input.value)
            const myConsole = new MyConsole(this.input.value)
            myConsole.render(document.getElementById("right"))
        })
    }

    render(container){
        const div = document.createElement("div")
        div.appendChild(this.input)
        div.appendChild(this.button)
        container.appendChild(div)
    }
}

const btnAddForm = document.getElementById("btnAddForm")
const app = document.getElementById("app")

btnAddForm.addEventListener("click", () => {
    const myForm = new MyForm()
    myForm.render(app)
})

class MyConsole {
    p = null
    constructor(text){
        this.p = document.createElement("p")
        this.p.innerHTML = text
    }

    render(container){
        container.appendChild(this.p)
    }
}
