class Person {
    name = "demo"
    age = 1

    constructor (name, age){
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log("Hello, my name is " + this.name) 
    }
}

const alice = new Person("alice", 20)
alice.sayHello()

class Student extends Person {
    className = "minh"
    grade = 0

    constructor (name, age, className, grade){
        super(name, age)
        this.className = className
        this.grade = grade
    }

    greeting(){
        console.log("Hello, my name is " + this.name + ". I'm " + this.age + " years old")
    }
}

const minh = new Student("Minh", 14)
minh.greeting()