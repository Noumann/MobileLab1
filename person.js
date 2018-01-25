"use strict";
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.address = address;
        this.age = age;
        this.name = name;
    }
    return Person;
}());
var p1 = new Person("Nouman", 23, "Galway");
console.log("\nName ", p1.name + "\nAge ", p1.age + "\nAddress ", p1.address);
