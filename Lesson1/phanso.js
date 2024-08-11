const UCLN = (a,b) => {
    if (b === 0) return a;
    return UCLN (b, a % b); 
}

class Phanso {
    constructor(tu, mau){
        Phanso.tu = tu;
        Phanso.mau = mau
    }

    reduce(){
        let c = UCLN(Phanso.tu,Phanso.mau)
        Phanso.tu /= c
        Phanso.mau /= c
    }

    toString() {
        return `${Phanso.tu}/${Phanso.mau}`
    }    
}

let ps1 = new Phanso(2,4);
console.log(ps1.toString());
ps1.reduce();
console.log(ps1.toString())


