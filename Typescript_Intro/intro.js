//Objet TypeScript
var Human = /** @class */ (function () {
    function Human(name, age, walkSpeed) {
        this.name = name;
        this.age = age;
        this.walkSpeed = walkSpeed;
    }
    Human.prototype.walk = function () {
        console.log("".concat(this.name, " is walking at a speed of ").concat(this.walkSpeed, " km/h"));
    };
    return Human;
}());
var person = new Human("Imhotep", 30, 5);
person.walk();
