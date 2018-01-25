"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    //constructor
    function Vehicle(year, engine, seats) {
        this.engine = engine;
        this.year = year;
        this.seats = seats;
    }
    return Vehicle;
}());
//instance of the class
var myCar = new Vehicle(2010, "small", 5);
console.log("Seats : " + myCar.seats);
//second class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(year, engine, seats, model) {
        var _this = _super.call(this, year, engine, seats) || this;
        _this.model = model;
        return _this;
    }
    return Car;
}(Vehicle));
var c1 = new Car(2010, "small", 5, "VW");
console.log("Model : " + c1.model);
