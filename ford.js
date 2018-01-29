"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importing the enums
var carInterface_1 = require("./carInterface");
var ford = /** @class */ (function () {
    function ford() {
        this.year = 1980;
        this.seats = 4;
        this.make = "Ford";
        this.doors = carInterface_1.Doors.five;
    }
    ford.prototype.displayInfo = function () {
        return "This is Ford";
    };
    return ford;
}());
var ford1 = new ford();
console.log(ford1.displayInfo() + "\nDoors : " + ford1.doors);
