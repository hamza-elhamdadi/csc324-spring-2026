class Dog {
    constructor(name){
        this.name = name;
    }

    bark(){
        console.log("woof");
    }

    getName(){
        return this.name;
    }
}

const fido = new Dog("fido");