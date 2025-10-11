//Objet TypeScript
class Human {
    name: string;
    age: number;
    walkSpeed: number;

    constructor(name: string, age: number, walkSpeed: number) {
        this.name = name;
        this.age = age;
        this.walkSpeed = walkSpeed;
    }

    walk() {
        console.log(`${this.name} is walking at a speed of ${this.walkSpeed} km/h`);
    }
}

var person = new Human("Imhotep", 30, 5);
person.walk();