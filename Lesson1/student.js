class Student {
    constructor(Name, Age, Address){
        Student.Name = Name;
        Student.Age = Age;
        Student.Address = Address
    }

    setName(newName){
        Student.Name = newName
    }

    getName(){
        return `${Student.Name}`
    }

    setAge(newAge){
        Student.Age = newAge
    }

    getAge(){
        return `${Student.Age}`
    }

    setAddress(newAddress){
        Student.Address = newAddress
    }

    getAddress(){
        return `${Student.Address}`
    }

    toString() {
        return `${Student.Name},${Student.Age},${Student.Address}`
    }    
}

let st1 = new Student("Nguyen Van A", 20 , "Ha Noi");
console.log(st1.toString())

st1.setName("Nguyen Van B");
console.log(st1.getName())

st1.setAge(21);
console.log(st1.getAge())

st1.setAddress("Hai Phong")
console.log(st1.getAddress())

console.log(st1.toString())