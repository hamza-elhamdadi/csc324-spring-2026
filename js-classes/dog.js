class Dog {

    constructor(name){
        this.name = name;
    }

    bark(){
        this.secretProperty = "secret";
        console.log("woof");
    }

    getName(){
        return this.name;
    }

    setName(name){
            
        this.name = name;
    }
}


// fido.bark();
// console.log(fido.getName());

// create another Dog object and give it a different name
// const max = new Dog("max");
// max.bark();
// console.log(max.getName());

// max.setName("fido");
// console.log(max.getName());

// console.log(max);

// add a setName method to the Dog class (test it)

// max.name = "max";
// console.log(max.name)

const fido = new Dog("fido");
fido.bark();
console.log(fido);